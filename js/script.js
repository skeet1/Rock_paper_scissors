const	user_score = document.getElementById("user_score");
const	comp_score = document.getElementById("comp_score");
const	result = document.getElementById("result");
const	play_again = document.getElementById("play");
const	but1 = document.getElementById("but1");
const	but2 = document.getElementById("but2");
const	but3 = document.getElementById("but3");
const	p_rock = document.getElementById("p_rock");
const	p_paper = document.getElementById("p_paper");
const	p_scissors = document.getElementById("p_scissors");
const	rock = document.getElementById("rock");
const	paper = document.getElementById("paper");
const	scissors = document.getElementById("scissors");
const	p_img_move = document.getElementById("p_move");
const	img_move = document.getElementById("move");
let		c_win = 0;
let		p_win = 0;

function comp_turn() {
	return (Math.ceil(Math.random() * 3));
}

function rock_b() {
	p_scissors.style.visibility = "hidden"
	p_paper.style.visibility = "hidden"
	p_rock.style.visibility = "visible"
	let comp = comp_turn();
	if (1 == comp)
	{
		result.innerHTML = "No one win";
		scissors.style.visibility = "hidden"
		paper.style.visibility = "hidden"
		rock.style.visibility = "visible"
	}
	else if (comp == 2)
	{
		result.innerHTML = "Computer Win";
		c_win++;
		comp_score.innerHTML = c_win;
		scissors.style.visibility = "hidden"
		paper.style.visibility = "visible"
		rock.style.visibility = "hidden"
	}
	else if (comp == 3)
	{
		result.innerHTML = "You Win";
		p_win++;
		user_score.innerHTML = p_win;
		scissors.style.visibility = "visible"
		paper.style.visibility = "hidden"
		rock.style.visibility = "hidden"
	}
	if (p_win == 5 || c_win == 5)
	{
		play_again.style.visibility = "visible";
		but1.style.pointerEvents = "none";
		but2.style.pointerEvents = "none";
		but3.style.pointerEvents = "none";
	}
}

function paper_b() {
	p_scissors.style.visibility = "hidden"
	p_paper.style.visibility = "visible"
	p_rock.style.visibility = "hidden"
	let comp = comp_turn();
	if (2 == comp)
	{
		result.innerHTML = "No one win";
		scissors.style.visibility = "hidden"
		paper.style.visibility = "visible"
		rock.style.visibility = "hidden"
	}
	else if (comp == 3)
	{
		result.innerHTML = "Computer Win";
		c_win++;
		comp_score.innerHTML = c_win;
		scissors.style.visibility = "visible"
		paper.style.visibility = "hidden"
		rock.style.visibility = "hidden"
	}
	else if (comp == 1)
	{
		result.innerHTML = "You Win";
		p_win++;
		user_score.innerHTML = p_win;
		scissors.style.visibility = "hidden"
		paper.style.visibility = "hidden"
		rock.style.visibility = "visible"
	}
	if (p_win >= 5 || c_win >= 5)
	{
		play_again.style.visibility = "visible";
		but1.style.pointerEvents = "none";
		but2.style.pointerEvents = "none";
		but3.style.pointerEvents = "none";
	}
}

function scissors_b() {
	p_scissors.style.visibility = "visible"
	p_paper.style.visibility = "hidden"
	p_rock.style.visibility = "hidden"
	let comp = comp_turn();
	if (3 == comp)
	{
		result.innerHTML = "No one win";
		scissors.style.visibility = "visible"
		paper.style.visibility = "hidden"
		rock.style.visibility = "hidden"
	}
	else if (comp == 1)
	{
		result.innerHTML = "Computer Win";
		c_win++;
		comp_score.innerHTML = c_win;
		scissors.style.visibility = "hidden"
		paper.style.visibility = "hidden"
		rock.style.visibility = "visible"
	}
	else if (comp == 2)
	{
		result.innerHTML = "You Win";
		p_win++;
		user_score.innerHTML = p_win;
		scissors.style.visibility = "hidden"
		paper.style.visibility = "visible"
		rock.style.visibility = "hidden"
	}
	if (p_win >= 5 || c_win >= 5)
	{
		play_again.style.visibility = "visible";
		but1.style.pointerEvents = "none";
		but2.style.pointerEvents = "none";
		but3.style.pointerEvents = "none";
	}
}

function reset() {
	user_score.innerHTML = 0;
	comp_score.innerHTML = 0;
	result.innerHTML = "";
	play_again.style.visibility = "hidden";
	but1.style.pointerEvents = "auto";
	but2.style.pointerEvents = "auto";
	but3.style.pointerEvents = "auto";
	c_win = 0;
	p_win = 0;
}
