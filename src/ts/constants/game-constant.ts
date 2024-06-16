export const CUSTOM_EVENTS = {
	BUTTON_CLICKED: 'button-clicked',
	ZONE_SELECTED: 'zone-selected',
	TRAJECTORY_DELETED: 'trajectory-deleted',
	MOVE_COMPLETE: 'move-complete',
};

export const TWEEN_EASING = {
	LINEAR: 'Linear',
	QUAD_EASE_IN: 'Quad.easeIn',
	CUBIC_EASE_IN: 'Cubic.easeIn',
	QUART_EASE_IN: 'Quart.easeIn',
	QUINT_EASE_IN: 'Quint.easeIn',
	SINE_EASE_IN: 'Sine.easeIn',
	EXPO_EASE_IN: 'Expo.easeIn',
	CIRC_EASE_IN: 'Circ.easeIn',
	BACK_EASE_IN: 'Back.easeIn',
	BOUNCE_EASE_IN: 'Bounce.easeIn',
	QUAD_EASE_OUT: 'Quad.easeOut',
	CUBIC_EASE_OUT: 'Cubic.easeOut',
	QUART_EASE_OUT: 'Quart.easeOut',
	QUINT_EASE_OUT: 'Quint.easeOut',
	SINE_EASE_OUT: 'Sine.easeOut',
	EXPO_EASE_OUT: 'Expo.easeOut',
	CIRC_EASE_OUT: 'Circ.easeOut',
	BACK_EASE_OUT: 'Back.easeOut',
	BOUNCE_EASE_OUT: 'Bounce.easeOut',
	QUAD_EASE_IN_OUT: 'Quad.easeInOut',
	CUBIC_EASE_IN_OUT: 'Cubic.easeInOut',
	QUART_EASE_IN_OUT: 'Quart.easeInOut',
	QUINT_EASE_IN_OUT: 'Quint.easeInOut',
	SINE_EASE_IN_OUT: 'Sine.easeInOut',
	EXPO_EASE_IN_OUT: 'Expo.easeInOut',
	CIRC_EASE_IN_OUT: 'Circ.easeInOut',
	BACK_EASE_IN_OUT: 'Back.easeInOut',
	BOUNCE_EASE_IN_OUT: 'Bounce.easeInOut',
};

export const NOTE_TEXT = {
	BORN_TEXT : '1996 year,\n I born in',
	FIRST_SCHOL_NOTE:'Timeline (2005-2007)',
	DAV_NOTE:'Timeline (2005-2007)',
	JNV_NOTE:'Timeline (2010-2017)'
}

export const GAME_FONT_CONFIGURATION = {
	fontData: {
		fontFamily: 'GameFont',
		fontSize: '30px',
		resolution: 2,
		color: "#000000",
		wordWrap: {
			width: 800,
		},
	},
}

export const GAME_FONT_CONFIGURATION2 = {
	fontData: {
		fontFamily: 'GameFont',
		fontSize: '30px',
		resolution: 2,
		color: "#8cae3a",
		wordWrap: {
			width: 800,
		},
	},
}

export const MARKET_DETAILS = {
	88: {
		marketId: 88,
		minBet: 100,
		maxBet: 10000,
		357: { 
			"GameMarketId": 88, 
			"Id": 357, 
			"Name": "7 Up(8,9,10,J,Q,K)", 
			"Lay": 0.0, 
			"Payout": 1.98, 
			"IsSuspended": false, 
			"TotalBets": 0.0 
		},
		358:{"GameMarketId":88,"Id":358,"Name":"7","Lay":0.0,"Payout":11.75,"IsSuspended":false,"TotalBets":600.0},
		359 : {"GameMarketId":88,"Id":359,"Name":"7 Down(A,2,3,4,5,6)","Lay":0.0,"Payout":1.98,"IsSuspended":false,"TotalBets":500.0},
	},
	89 :{
		marketID: 89,
		minBet : 100,
		maxBet : 10000,
       360 : {"GameMarketId":89,"Id":360,"Name":"Red","Lay":0.0,"Payout":1.98,"IsSuspended":false,"TotalBets":400.0},
	   361 :{"GameMarketId":89,"Id":361,"Name":"Black","Lay":0.0,"Payout":1.98,"IsSuspended":false,"TotalBets":1600.0},
	},
	90 : {
		marketId : 90,
		minBet : 100,
		maxBet : 10000,
		362 :{"GameMarketId":90,"Id":362,"Name":"Club","Lay":0.0,"Payout":3.75,"IsSuspended":false,"TotalBets":0.0},
		363 : {"GameMarketId":90,"Id":363,"Name":"Diamond","Lay":0.0,"Payout":3.75,"IsSuspended":false,"TotalBets":1200.0},
		364 : {"GameMarketId":90,"Id":364,"Name":"Heart","Lay":0.0,"Payout":3.75,"IsSuspended":false,"TotalBets":100.0},
		365 : {"GameMarketId":90,"Id":365,"Name":"Spade","Lay":0.0,"Payout":3.75,"IsSuspended":false,"TotalBets":700.0}
	},
	91 : {
		marketId : 91,
		minBet : 100,
		maxBet : 10000,
		366 : {"GameMarketId":91,"Id":366,"Name":"Odd(A,3,5,7,9,J,K)","Lay":0.0,"Payout":1.8,"IsSuspended":false,"TotalBets":0.0},
		367 : {"GameMarketId":91,"Id":367,"Name":"Even(2,4,6,8,10,Q)","Lay":0.0,"Payout":2.1,"IsSuspended":false,"TotalBets":300.0}
	}

}

export const game_text = {
	lossMessage : "SORRY FOR YOUR LOSS, BETTER LUCK NEXT TIME",
}

export const coins_and_value = {
	'100' : {
		key : '100',
		value: 100
	},
	'200' : {
		key : '200',
		value : 200
	},
	'300' : {
		key : '300',
		value : 300
	},
	'400' : {
		key : '400',
		value : 400
	},
	'500' : {
		key : '500',
		value : 500
	},
	'600' : {
		key : '600',
		value : 600
	},
	'700' : {
		key : '700',
		value : 700
	},
	'800' : {
		key : '800',
		value : 800
	},
	'900' : {
		key : '900',
		value : 900
	},
	'1K' :{
		key : '1K',
		value : 1000
	},
	'10K' :{
		key : '10K',
		value : 10000
	}
}

export const GAME_VIEW_CONSTANT ={
	NORMAL_VIEW:"NORMAL_VIEW",
	CLASSICAL_VIEW:"CLASSICAL_VIEW"
}

export const MARKET_POSITIONS = {
	nameArray : ["7 Up (8,9,10,J,Q,K)","7","7 Down (A,2,3,4,5,6)","Red","Black","CLUBS","DIAMONDS","HEARTS",
               "SPADES","Odd (A,3,5,7,9,J,K)","Even (2,4,6,8,10,Q)"],
	"7 Up (8,9,10,J,Q,K)": {
		x: 120,
		y: 650,
		name : 'match_odd'
	},
	"7": {
		x: 360,
		y: 650,
		name : 'match_odd'
	},
	"7 Down (A,2,3,4,5,6)": {
		x: 600,
		y: 650,
		name : 'match_odd'
	},
	"Red": {
		x: 150,
		y: 840,
		name : 'color'
	},
	"Black": {
		x: 550,
		y: 840,
		name : 'color'
	},
	"CLUBS": {
		x: 100,
		y: 1000,
		name : 'suit'
	},
	"DIAMONDS": {
		x: 250,
		y: 1000,
		name : 'suit'
	},
	"HEARTS": {
		x: 450,
		y: 1000,
		name : 'suit'
	},
	"SPADES": {
		x: 600,
		y: 1000,
		name : 'suit'
	},
	"Odd (A,3,5,7,9,J,K)": {
		x: 160,
		y: 1200,
		name : 'odd_even'
	},
	"Even (2,4,6,8,10,Q)": {
		x: 530,
		y: 1200,
		name : 'odd_even'
	}
}

export const MARKET_POSITIONS_NORMAL_VIEW = {
	nameArray : ["7 Up (8,9,10,J,Q,K)","7","7 Down (A,2,3,4,5,6)","Red","Black","CLUBS","DIAMONDS","HEARTS",
               "SPADES","Odd (A,3,5,7,9,J,K)","Even (2,4,6,8,10,Q)"],
	"7 Up (8,9,10,J,Q,K)": {
		x: 240,
		y: 634,
		name : 'match_odd'
	},
	"7": {
		x: 240,
		y: 684,
		name : 'match_odd'
	},
	"7 Down (A,2,3,4,5,6)": {
		x: 240,
		y: 730,
		name : 'match_odd'
	},
	"Red": {
		x: 240,
		y: 830,
		name : 'color'
	},
	"Black": {
		x: 240,
		y: 880,
		name : 'color'
	},
	"CLUBS": {
		x: 240,
		y: 950,
		name : 'suit'
	},
	"DIAMONDS": {
		x: 240,
		y: 1000,
		name : 'suit'
	},
	"HEARTS": {
		x: 240,
		y: 1030,
		name : 'suit'
	},
	"SPADES": {
		x: 240,
		y: 1080,
		name : 'suit'
	},
	"Odd (A,3,5,7,9,J,K)": {
		x: 240,
		y: 1160,
		name : 'odd_even'
	},
	"Even (2,4,6,8,10,Q)": {
		x: 240,
		y: 1210,
		name : 'odd_even'
	}
}

export const GAME_SERVER_LINK = {
	local : 'http://165.227.236.109:5001/',
	live: 'https://engine1.diamond99.xyz/'
}

export const celebration_market_animaton_alignment ={
	"Red":{
		x : 330,
		y:  593.5,
		animation:"color"
	},
	"Black":{
		x : 710.5,
		y:  593.5,
		animation:"color"
	},
	"Odd (A,3,5,7,9,J,K)":{
		x : 349,
		y:  503.5,
		animation:"odd_even"

	},
	"Even (2,4,6,8,10,Q)": {
		x: 709.5,
		y: 503.5 ,
		animation:"odd_even"
	},
	"CLUBS":{
		x: 312,
		y: 698.5 ,
		animation:"suit"
	},
	"DIAMONDS":{
		x: 490.5,
		y: 698.5 ,
		animation:"suit"
	},
	"SPADES":{
		x: 850.5,
		y: 698.5 ,
		animation:"suit"
	},
	"HEARTS":{
		x: 672,
		y: 698.5 ,
		animation:"suit"
	},
	"7":{
		x:566,
		y:610.5,
		animation:"match_odd"
	},
	'7 Down (A,2,3,4,5,6)':{
		x:806.5,
		y:610.5,
		animation:"match_odd"
	},
	"7 Up (8,9,10,J,Q,K)":{
		x: 320,
		y: 610.5,
		animation:"match_odd"
	}

}
