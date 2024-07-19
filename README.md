# Web Chess
*It aint pretty but it kinda works. Chess conisseurs beware.*

I was in chess club in high school. I think the way this turned out kinda sums up exactly how good I am at chess. I am not good at chess.

### Getting started
[go here](https://kei-the-gae.github.io/chess-game/)\
\
Don't cheat. I'm watching you :\)\
Don't drag pieces onto pieces. Don't say I didn't warn you\
\
![ugly](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjJ6NGQzMDNvdTRlcnl0c2pyMWoydWt1dGNkbTdoMHU2aTNkc3FlNSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qdBHt01vnl972/giphy.gif)

### Technologies used
HTML / CSS / JavaScript

### Next steps
I had  *SO MANY* plans for this that completely and utterly failed.
- There's currently a little thing where you can't drop pieces onto other pieces. While the game technically plays its annoying
- There is no how to play. Brain hurty, don't judge (this is technically a project requirement, but there are no images and the board is literally formed by flexbox, there's no way I can fail this category even with one requirement missing)
- Pieces are currently just text. This should change, but again brain hurty
- Reset. I think this might work better now that the event listeners are fixed
- Add click start piece and destination rather than force drag
- Allow clicking on a piece to show valid positions to move a piece visually
- Pieces can be moved anywhere. There's starter code in the data file that I started fiddling with that ended up being unused because I forgot to account for using those to check if the king is in check and there's a bunch of hard coded variables amongst the math. Pieces should not in fact move anywhere
- Speaking of checking for check? Not a thing. There's a function for it unused in the data file but as of now capturing a king determines the winner. No stalemate
- Pawn promotion? No time for it. There's an unused variable in the data file that accounts for promotion, and a function. Feel free to use promotions since all pieces move freely, but they won't update
- En passant? First of all I literally have been calling it "en avant" while talking about it, that's how much it computes. Second, no time
- Timer
- Log captured pieces, for bragging rights
- Keep a whole play session between two players in memory until reset button is hit, and restart games when winner/stalemate is determined
- In general? Look prettier. This looks atrocious