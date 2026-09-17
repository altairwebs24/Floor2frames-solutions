# Floor 2 Frames Luxury Website

## Build
- Create five pages: Home, Services, Projects, About, and Contact.
- Use a refined black, ivory, stone, and metallic-gold visual system with an editorial luxury font pairing.
- Feature the uploaded video as the Home page backdrop with clear overlaid messaging and quote actions.
- Use selected uploaded project photos as visual proof, with descriptive captions and supporting copy rather than standalone images.
- Treat the promotional graphics as information references only; extract service names, positioning, pricing cues, contact details, and benefits without embedding those graphics.
- Add clear navigation, mobile layouts, WhatsApp and email contact actions, and a quote enquiry form.
- Globally hide the element with ID `lovable-badge` in CSS.

## Media
- Upload the hero video and selected project photos to Lovable’s public CDN asset service so they are publicly served without storing binaries in the repository.
- Preserve the strongest real project imagery; avoid duplicating the repeated wall photo.

## Technical details
- Keep the existing TanStack routing structure and add one route per page.
- Define all visual colors, typography, spacing, and motion through semantic tokens in the global stylesheet.
- Add unique page titles and descriptions for all five pages.
- Verify navigation, video playback, media loading, contact links, and phone-sized layouts in the live preview.
