# Indo Lanner - Interactive Features

## 1. Authentication Modal (Login/Register)
**Location:** Navbar (bottom of screen)
- Click "Masuk" (Login) or "Daftar" (Register) buttons
- Opens a Neo-Brutalism styled modal with:
  - Thick 4px borders with 8px solid black shadows
  - Input fields with inset shadows for depth
  - Name field (register only), email, and password fields
  - Submit button with active state feedback
  - Toggle between login and register modes

## 2. Review Modal with Star Rating
**Location:** Destination Detail view (Tulis Review button)
- Click "Tulis Review" button on any destination detail page
- Interactive 5-star rating system:
  - Hover over stars to preview rating
  - Click to select rating
  - Stars fill with primary color on selection
  - Display "X / 5" feedback
- Textarea for detailed review comments (max 500 characters)
- Validation: Must have rating and comment to submit
- Reviews appear below in the destination detail page

## 3. City Dashboard Interactive SVG Map
**Location:** Keadaan Kotaku (City State) view
- Click on Indonesian regions (Sumatra, Java, Bali, Kalimantan, Sulawesi)
- Regions highlight in bright yellow on hover/select
- Thick black strokes and vibrant fills following Neo-Brutalism style
- Click region markers or buttons to instantly update stats
- Right column shows:
  - MASSIVE typography (text-8xl) for IQAir Index
  - MASSIVE typography (text-8xl) for Temperature
  - Large 3D-style emojis paired with stats
  - Color-coded pollution status badges

## Design System
All interactive components follow the Neo-Brutalism aesthetic:
- Thick 4px borders on major elements
- Solid drop shadows: `box-shadow: 4px 4px 0px 0px #000`
- Bold, aggressive typography using font-serif for headings
- High-contrast color scheme with vibrant primaries and secondaries
- Focus states with inset shadows for tactile feel
- Disabled states with opacity reduction and cursor changes

## Component Files
- `components/auth-modal.tsx` - Login/Register modal
- `components/review-modal.tsx` - Review submission modal
- `components/star-rating.tsx` - Reusable 5-star rating component
- `components/navbar.tsx` - Updated with Auth buttons
- `components/screens/destination-detail.tsx` - Updated with Review functionality
