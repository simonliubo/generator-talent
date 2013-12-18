# Generator TalentJS
A generator for TalentJS Framework

## Dependencies
- Make sure you have yo,bower installed:
	`npm install -g yo bower`

## Getting started
- git clone the generators repo locally
- cd into that repository and run `npm link`
- Install the generator
	`npm install generator-talent`

## Creating project
- create project folder and cd
	`mkdir demo && cd $_`
- run generator
	`yo talent`
- start project
	`grunt server`

## Creating Page View
- create project page view
	`yo talent:page about/users`
- create project resource page view
	`yo talent:page about/users -res`
- delete project page view
	`yo talent:page about/users -del`
- use expand pattern
	`yo talent:page 'about/{users,pages}/{show,edit}'`

## Creating View (ItemView, CompositeView, Layout)
- create item view (path:item)
	`yo talent:view about/user:item`
- create composite view (path:composite)
	`yo talent:view about/user:composite`
- create layout view (path:layout)
	`yo talent:view about/user:layout`