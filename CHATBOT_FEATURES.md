# Chatbot FAB Features

## Overview
The Indo Lanner app now includes an intelligent chatbot FAB (Floating Action Button) that provides personalized destination recommendations with rich interactive cards.

## Features

### 1. Floating Action Button (FAB)
- **Position**: Fixed at bottom-right of screen (z-index: 50)
- **Design**: Neo-brutalist styled with thick 4px borders and solid 4px black shadows
- **States**:
  - **Closed**: Primary color with MessageCircle icon, hovers with scale-110
  - **Open**: Accent color with X icon
- **Animation**: Smooth toggle with overlay backdrop

### 2. Chat Window
- **Dimensions**: 384px wide × 500px tall, positioned above the FAB
- **Animation**: Slides in from bottom with ease-out animation (300ms duration)
- **Always On Top**: z-index: 50 (above navbar and other content)
- **Closing**: Click X button or click the overlay to dismiss

### 3. Rich Destination Cards
When the AI recommends a destination, it renders a `RichDestinationCard` component inside the chat bubble:

**Components**:
- **Destination Image**: 160px height with object-cover positioning
- **Destination Name**: Large bold serif typography
- **Status Badge**: Real-time status indicator (Ramai/Sedang/Sepi)
  - Color-coded: Red (Ramai), Yellow (Sedang), Green (Sepi)
  - Includes emoji indicator
- **"Tambah ke Rencana" Button**: Fully functional button that:
  - Triggers confirmation message from AI
  - Has neo-brutalist styling (4px border, 4px shadow)
  - Provides user feedback

### 4. Interactive Chat Experience
- **AI Responses**: 
  - Text-based responses for general queries
  - Destination card responses for recommendation requests
  - Contextual replies based on user input
- **Message Types**: Supports both text and rich content messages
- **Loading States**: Animated dots while AI "thinks"
- **Auto-scroll**: Smoothly scrolls to latest message
- **Disabled Input**: Input field disables during AI response

### 5. Neo-Brutalism Styling Throughout
- All components use strict neo-brutalism:
  - 4px solid black borders
  - 4px offset solid shadows: `box-shadow: 4px 4px 0px 0px #000`
  - No soft/gradient shadows
  - Bold, aggressive typography
  - High contrast colors (primary reds, yellows, blues)

## File Structure
```
components/
├── chatbot-fab.tsx              # Main FAB + chat window component
├── rich-destination-card.tsx    # Rich card displayed in chat
├── chat-bubble.tsx              # Updated to support children/rich content
```

## Usage
The ChatbotFAB component is integrated in `/app/page.tsx` and renders at the root level, making it available across all screens.

## Interaction Flow
1. User clicks FAB → Chat window slides up
2. User enters message → Sent to AI
3. AI responds:
   - If recommendation request: Rich destination card appears
   - Otherwise: Text response appears
4. User can click "Tambah ke Rencana" on destination cards
5. AI confirms addition and updates chat
6. User can close chat by clicking X or overlay
