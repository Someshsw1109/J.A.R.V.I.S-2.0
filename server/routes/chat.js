import express from 'express';
import Chat from '../models/Chat.js';
import aiService from '../services/ai.js';

const router = express.Router();

router.post('/send', async (req, res) => {
  try {
    const { message, userId } = req.body;
    
    // Find or create chat history
    let chat = await Chat.findOne({ userId });
    if (!chat) {
      chat = new Chat({ userId, messages: [] });
    }

    // Add user message
    chat.messages.push({
      role: 'user',
      content: message
    });

    // Generate AI response
    const aiResponse = await aiService.generateResponse(
      message,
      chat.messages
    );

    // Add AI response
    chat.messages.push({
      role: 'assistant',
      content: aiResponse
    });

    await chat.save();

    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat Error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
});

router.get('/history/:userId', async (req, res) => {
  try {
    const chat = await Chat.findOne({ userId: req.params.userId });
    res.json(chat?.messages || []);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
});

export default router;