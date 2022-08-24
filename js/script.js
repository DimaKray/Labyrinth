const output = document.querySelector('.output-text')
let side = '';
let enterPoint = 0;
class person {
   constructor(name, hp, move, score, best, close) {
      this.name = name;
      this.hp = hp;
      this.move = move;
      this.score = score;
      this.best = best;
      this.close = close;  // continue || close
   };
   // registration method
   regisration() {
      const modal = document.getElementById('myModal');
      document.querySelector('.modal-body').onclick = (event) => {
         //click check
         if (event.target.classList.contains('exit-enter')) {
            this.name = enterName; // take the value from the impute
            this.hp = 10; // start value
            this.score = 0; // start value
            this.best = 0; // start value
            this.close = 'no'; // start value
            this.move = ''; // start value
            document.querySelector('.name').textContent = this.name; // filling in the name field
            document.querySelector('.hp-panel-text').textContent = this.hp; // filling in the hp field
            document.querySelector('.score').textContent = this.score; // filling in the score field
            document.querySelector('.best').textContent = this.best; // filling in the best field
            modal.style.display = "none"; // remove the modal window
         };
      };
   };
   //clear method
   clear () {
      side = '';
      this.move = '';
      enterPoint = 0;
   };
   // up score method
   scoreUp () {
      this.score++;
      document.querySelector('.score').textContent = this.score;
   };
   // hp output method
   hpOut () {
      document.querySelector('.hp-panel-text').textContent = this.hp;
   };
   // score check method
   scoreChecker () {
      if (this.score == 50) {
         output.textContent = 'YOU WIN!!!';
         if (this.best < this.score) {
            this.best = this.score;
            document.querySelector('.best').textContent = this.best;
         };
         this.score = 0;
         this.hp = 10;
      };
   };
   // hp check method
   hpChecker () {
      if (this.hp == 0) {
         output.textContent = 'YOU LOSE:(';
         if (this.best < this.score) {
            this.best = this.score;
            document.querySelector('.best').textContent = this.best;
         };
         this.score = 0;
         this.hp = 10;
      };
   };
   // Check side method
   sideChecker() {
      //click check
      document.querySelector('.sides__panel').onclick = (event) => {
         if (event.target.classList.contains('btm-min')) {
            if (side == '') {
               side = event.target.className;
               console.log(side);
               switch (side) {
                  case 'btm-min side left':
                     output.textContent = 'left';
                     break;
                  case 'btm-min side top':
                     output.textContent = 'top';
                     break;
                  case 'btm-min side bottom':
                     output.textContent = 'bottom';
                     break;
                  case 'btm-min side right':
                     output.textContent = 'right';
                     break;
               };
            } else {return;};
         };
      };
   };
   // Check move method
   moveAndEnterChecker() {
      //click check
      document.querySelector('.buttoms__panel').onclick = (event) => {
         if (event.target.classList.contains('btm-text')) {
            if (this.move == '') {
               this.move = event.target.textContent;
               console.log(this.move);
               switch (this.move) {
                  case '1':
                     output.textContent = '1';
                     break;
                  case '2':
                     output.textContent = '2';
                     break;
                  case '3':
                     output.textContent = '3';
                     break;
                  case '4':
                     output.textContent = '4';
                     break;
                  case '5':
                     output.textContent = '5';
                     break;
               };
            } else {return;};
         };
         if (event.target.classList.contains('btm-exit')) {
            if (side == 'btm-min side left' && this.move !== '') {
               console.log(enterPoint);
               this.moveLeft();
               return;
            } else if (side == 'btm-min side top' && this.move !== '') {
               enterPoint++;
               this.moveTop();
            } else if (side == 'btm-min side bottom' && this.move !== '') {
               enterPoint++;
               this.moveBottom();
            } else if (side == 'btm-min side right' && this.move !== '') {
               enterPoint++;
               this.moveRight();
            } else {
               return;
            };
         };
      };
   };
   //move top method
   moveTop() {
      switch (this.hp) {
         case 10:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 9:
            if (this.move == 2) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 8:
            if (this.move == 4) {
               this.hp -= 8;
            }
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 7:
            if (this.move == 2) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 6:
            if (this.move == 3) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 5:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 4:
            if (this.move == 2) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 3:
            if (this.move == 4) {
               this.hp -= 2;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 2:
            if (this.move == 1) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 1:
            if (this.move == 1) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
      }
   };
   //move bottom method
   moveBottom() {
      switch (this.hp) {
         case 10:
            if (this.move == 1) {
               this.hp -= 2;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 9:
            if (this.move == 1) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 8:
            if (this.move == 3) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 7:
            if (this.move == 1) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 6:
            if (this.move == 1) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 5:
            if (this.move == 3) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 4:
            if (this.move == 1) {
               this.hp -= 2;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 3:
            if (this.move == 1) {
               this.hp += 2;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 2:
            if (this.move == 3) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 1:
            if (this.move == 2) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
      }
   };
   //move left method
   moveLeft() {
      switch (this.hp) {
         case 10:
            if (this.move == 4) {
               this.hp -= 6;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 9:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 8:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 7:
            if (this.move == 4) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 6:
            if (this.move == 2) {
               this.hp += 2;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 5:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 4:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 3:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 2:
            if (this.move == 2) {
               this.hp -= 2;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 1:
            if (this.move == 2) {
               this.hp++;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
      }
   };
   //move right method
   moveRight() {
      switch (this.hp) {
         case 10:
            if (this.move == 3) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 9:
            if (this.move == 1) {
               this.hp -= 3;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 8:
            if (this.move == 1) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 7:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 6:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 5:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 4:
            if (this.move == 5) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 3:
            if (this.move == 1) {
               this.hp--;
            };
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 2:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
         case 1:
            this.scoreChecker ();
            this.hpChecker ();
            this.hpOut ();
            this.scoreUp ();
            this.clear ();
            break;
      }
   };
};
// function main
function main () {
      let user = new person();
      user.regisration ();
      user.sideChecker ();
      user.moveAndEnterChecker ();
};
main ();