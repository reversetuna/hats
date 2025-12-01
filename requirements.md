# hats app

This web app is a web version of the card "game" called 57 Hats (https://57hats.com/)

it's less of a game, and more of a tool for determining who does what in an organization. read about the game online.

this app should allow the user to pick from the deck of 57 cards to be "in play," or chosen to be a role at your org. you should also be able to make new cards with new roles. if you can't find the actual 57 roles online, just put in some good examples and i can tweak them manually. there shold only ever be one instance of each hat. when a hat is in play, grey it out in the list of hats. i want the cards to move and shimmer when you hover over them.

There's also a list of tasks. each task is written by the user, no default tasks. tasks can be assigned to hats.

the last tier is people. hats are assigned to people. people are visualized as swimlanes that cards can be dropped into. all cards in swimlanes should be easily readable and visible. all task cards assigned to each hat card in a swimlane should also be visible. when too many people are added, i should be able to scroll horizontally to see all swimlanes. whecon too many cards are added to a swimlane, i should be able to scroll vertically to see them all.

the structure is `people 1-N hats 1-N tasks`

the app should be a visual "table top" where you can click and drag cards onto people, assign tasks (which should look like little sticky notes) onto the cards.

the task cards can be loose on the play field, and not be assigned to swimlanes. but when it's dragged on top of a hat card, it should snap in place beneath the hat card in a minimal format. when clicking on a hat card, it should open a modal that shows all the tasks assigned to the hat card and all their details. when a task is removed from a hat card, put it back on the board as if it was just made again. there should be a button on the top of the ui that unassigns all tasks from hat cards.

there should also be a view where i can see EVERY task in play, wiht a small slug that shows what (if any) hat it's assigned to. a view of every task in the organization. there should be the ability to add a new task from this view. show them to me in a grid.

i also want a "person view" where i can see every hat assigned to a person, and every task within that hat.

## tech

- it should use threejs for all the visualization
- host a web server using npm
- it should also be able to save all the info out to a json file that can be imported later, but also it should store all this info locally to the browser so it just remembers where you left off.
