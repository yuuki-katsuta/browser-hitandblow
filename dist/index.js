/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/class/hitandblow.ts":
/*!********************************!*\
  !*** ./ts/class/hitandblow.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HitAndBlow": () => (/* binding */ HitAndBlow)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const modes = ['nomal', 'hard'];
class HitAndBlow {
    constructor() {
        this.answerSource = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
        ];
        this.answer = [];
        this.tryCount = 0;
        this.mode = 'nomal';
    }
    //３つの数字を決定
    setting() {
        return __awaiter(this, void 0, void 0, function* () {
            const answrLength = this.getAnswerLength();
            while (this.answer.length < answrLength) {
                const num = Math.floor(Math.random() * this.answerSource.length);
                const selectedItem = this.answerSource[num];
                if (!this.answer.includes(selectedItem)) {
                    this.answer.push(selectedItem);
                }
            }
        });
    }
    getAnswerLength() {
        switch (this.mode) {
            case 'nomal':
                return 3;
            case 'hard':
                return 4;
            default:
                const neverValue = this.mode;
                throw new Error(`${neverValue}は無効なモードです...`);
        }
    }
    play(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validate(input)) {
                alert('無効な入力です!');
                this.init();
                return;
            }
            const result = this.check(input);
            this.init();
            if (result.hit === 3) {
                this.end();
                return;
            }
            if (result.hit === this.answer.length)
                this.tryCount += 1;
            else {
                const log = document.getElementById('log');
                const ele = document.createElement('ul');
                ele.innerHTML = `${input}: Hit: ${result.hit} Blow: ${result.blow}`;
                log === null || log === void 0 ? void 0 : log.appendChild(ele);
                this.tryCount += 1;
            }
        });
    }
    check(input) {
        let hitCount = 0;
        let blowCount = 0;
        input.forEach((val, index) => {
            if (val === this.answer[index])
                hitCount += 1;
            else if (this.answer.includes(val))
                blowCount += 1;
        });
        return {
            hit: hitCount,
            blow: blowCount,
        };
    }
    validate(inputArr) {
        const isLengthValid = inputArr.length === this.answer.length;
        //answerSourceに含まれるか
        const isAllAnswerSourceOption = inputArr.every((val) => this.answerSource.includes(val));
        //重複チェック
        const isAllDifferentValues = inputArr.every((val, i) => inputArr.indexOf(val) === i);
        return isLengthValid && isAllAnswerSourceOption && isAllDifferentValues;
    }
    init() {
        const checkbox = document.querySelectorAll("input[type='checkbox']");
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
        document.getElementById('select').innerHTML = '';
    }
    end() {
        alert(`正解です!! \n試行回数: ${this.tryCount}回`);
        this.reset();
    }
    reset() {
        const log = document.getElementById('log');
        log.innerHTML = '';
        this.answer = [];
        this.tryCount = 0;
        this.setting();
    }
}


/***/ }),

/***/ "./ts/main.page.ts":
/*!*************************!*\
  !*** ./ts/main.page.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainPage": () => (/* binding */ mainPage)
/* harmony export */ });
const mainPage = `
  <div>Hit and Blow ゲーム!!</div>
    <p>0から9の数字で3ケタの数字を作り、正解の数字を予測していくゲームです。<br/> 正解の3桁の数値に対して、予測した数字が位置も数字も合っている場合は「hit」、位置は間違っているが数字は合っているという場合は「blow」と表示されます。</p>
    <div>
      <p>3つの数字を選択してね!</p>
      <div id="render" class="select-wrapper"></div>
      <br/>
      <spanp>選択した数字→</span>
      <span id="select"></span>
      <br/>
      <br/>
      <button id="reset">数字をリセット!</button>
      <button type="button" id="start-button">送信!</button>
      <div>
        <p>ログ</p>
        <div id="log"></div>
      </div>
    </div>
  </div>
`;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class_hitandblow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class/hitandblow */ "./ts/class/hitandblow.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ "./ts/main.page.ts");


const hitandblow = new _class_hitandblow__WEBPACK_IMPORTED_MODULE_0__.HitAndBlow();
let list = [];
const app = document.getElementById('app');
app.innerHTML = _main_page__WEBPACK_IMPORTED_MODULE_1__.mainPage;
for (let i = 0; i < 10; i++) {
    document.getElementById('render').innerHTML += `<span><input type="checkbox" value=${i} name="number">
  <label>${i}</label></span>`;
}
const checkbox = document.querySelectorAll("input[type='checkbox']");
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', (_) => {
        if (list.length >= 3) {
            alert('数字は3つ選択してね!');
            if (list.includes(checkbox[i].value)) {
                checkbox[i].checked = true;
            }
            else
                checkbox[i].checked = false;
            return;
        }
        if (!checkbox[i].checked) {
            checkbox[i].checked = true;
            return;
        }
        else {
            list.push(i.toString());
            document.getElementById('select').innerHTML += `${i}`;
        }
    });
}
const startButton = document.getElementById('start-button');
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', () => {
    hitandblow.play(list);
    list = [];
});
const resetButton = document.getElementById('reset');
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', () => {
    list = [];
    document.getElementById('select').innerHTML = '';
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
});
window.addEventListener('load', () => {
    hitandblow.setting();
    list = [];
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBRSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7Q0FDSjtBQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUQsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JELFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDN0I7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ25DLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy8uL3RzL2NsYXNzL2hpdGFuZGJsb3cudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvLi90cy9tYWluLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jyb3dzZXItaGl0LWFuZC1ibG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy8uL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGVzID0gWydub21hbCcsICdoYXJkJ10gYXMgY29uc3Q7XG50eXBlIE1vZGUgPSB0eXBlb2YgbW9kZXNbbnVtYmVyXTtcbmV4cG9ydCBjbGFzcyBIaXRBbmRCbG93IHtcbiAgcHJpdmF0ZSByZWFkb25seSBhbnN3ZXJTb3VyY2UgPSBbXG4gICAgJzAnLFxuICAgICcxJyxcbiAgICAnMicsXG4gICAgJzMnLFxuICAgICc0JyxcbiAgICAnNScsXG4gICAgJzYnLFxuICAgICc3JyxcbiAgICAnOCcsXG4gICAgJzknLFxuICBdO1xuICBwcml2YXRlIGFuc3dlcjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSB0cnlDb3VudCA9IDA7XG4gIHByaXZhdGUgbW9kZTogTW9kZSA9ICdub21hbCc7XG5cbiAgLy/vvJPjgaTjga7mlbDlrZfjgpLmsbrlrppcbiAgYXN5bmMgc2V0dGluZygpIHtcbiAgICBjb25zdCBhbnN3ckxlbmd0aCA9IHRoaXMuZ2V0QW5zd2VyTGVuZ3RoKCk7XG4gICAgd2hpbGUgKHRoaXMuYW5zd2VyLmxlbmd0aCA8IGFuc3dyTGVuZ3RoKSB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmFuc3dlclNvdXJjZS5sZW5ndGgpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5hbnN3ZXJTb3VyY2VbbnVtXTtcbiAgICAgIGlmICghdGhpcy5hbnN3ZXIuaW5jbHVkZXMoc2VsZWN0ZWRJdGVtKSkge1xuICAgICAgICB0aGlzLmFuc3dlci5wdXNoKHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbnN3ZXJMZW5ndGgoKSB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ25vbWFsJzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlICdoYXJkJzpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBuZXZlclZhbHVlOiBuZXZlciA9IHRoaXMubW9kZTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke25ldmVyVmFsdWV944Gv54Sh5Yq544Gq44Oi44O844OJ44Gn44GZLi4uYCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcGxheShpbnB1dDogc3RyaW5nW10pIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoaW5wdXQpKSB7XG4gICAgICBhbGVydCgn54Sh5Yq544Gq5YWl5Yqb44Gn44GZIScpO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2hlY2soaW5wdXQpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGlmIChyZXN1bHQuaGl0ID09PSAzKSB7XG4gICAgICB0aGlzLmVuZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmhpdCA9PT0gdGhpcy5hbnN3ZXIubGVuZ3RoKSB0aGlzLnRyeUNvdW50ICs9IDE7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJyk7XG4gICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgZWxlLmlubmVySFRNTCA9IGAke2lucHV0fTogSGl0OiAke3Jlc3VsdC5oaXR9IEJsb3c6ICR7cmVzdWx0LmJsb3d9YDtcbiAgICAgIGxvZz8uYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgIHRoaXMudHJ5Q291bnQgKz0gMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKGlucHV0OiBzdHJpbmdbXSkge1xuICAgIGxldCBoaXRDb3VudCA9IDA7XG4gICAgbGV0IGJsb3dDb3VudCA9IDA7XG5cbiAgICBpbnB1dC5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsID09PSB0aGlzLmFuc3dlcltpbmRleF0pIGhpdENvdW50ICs9IDE7XG4gICAgICBlbHNlIGlmICh0aGlzLmFuc3dlci5pbmNsdWRlcyh2YWwpKSBibG93Q291bnQgKz0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaGl0OiBoaXRDb3VudCxcbiAgICAgIGJsb3c6IGJsb3dDb3VudCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZShpbnB1dEFycjogc3RyaW5nW10pIHtcbiAgICBjb25zdCBpc0xlbmd0aFZhbGlkID0gaW5wdXRBcnIubGVuZ3RoID09PSB0aGlzLmFuc3dlci5sZW5ndGg7XG4gICAgLy9hbnN3ZXJTb3VyY2XjgavlkKvjgb7jgozjgovjgYtcbiAgICBjb25zdCBpc0FsbEFuc3dlclNvdXJjZU9wdGlvbiA9IGlucHV0QXJyLmV2ZXJ5KCh2YWwpID0+XG4gICAgICB0aGlzLmFuc3dlclNvdXJjZS5pbmNsdWRlcyh2YWwpXG4gICAgKTtcbiAgICAvL+mHjeikh+ODgeOCp+ODg+OCr1xuICAgIGNvbnN0IGlzQWxsRGlmZmVyZW50VmFsdWVzID0gaW5wdXRBcnIuZXZlcnkoXG4gICAgICAodmFsLCBpKSA9PiBpbnB1dEFyci5pbmRleE9mKHZhbCkgPT09IGlcbiAgICApO1xuICAgIHJldHVybiBpc0xlbmd0aFZhbGlkICYmIGlzQWxsQW5zd2VyU291cmNlT3B0aW9uICYmIGlzQWxsRGlmZmVyZW50VmFsdWVzO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja2JveFtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKSEuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgYWxlcnQoYOato+ino+OBp+OBmSEhIFxcbuippuihjOWbnuaVsDogJHt0aGlzLnRyeUNvdW50feWbnmApO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2cnKSE7XG4gICAgbG9nLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuYW5zd2VyID0gW107XG4gICAgdGhpcy50cnlDb3VudCA9IDA7XG4gICAgdGhpcy5zZXR0aW5nKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBtYWluUGFnZTogc3RyaW5nID0gYFxuICA8ZGl2PkhpdCBhbmQgQmxvdyDjgrLjg7zjg6AhITwvZGl2PlxuICAgIDxwPjDjgYvjgok544Gu5pWw5a2X44GnM+OCseOCv+OBruaVsOWtl+OCkuS9nOOCiuOAgeato+ino+OBruaVsOWtl+OCkuS6iOa4rOOBl+OBpuOBhOOBj+OCsuODvOODoOOBp+OBmeOAgjxici8+IOato+ino+OBrjPmoYHjga7mlbDlgKTjgavlr77jgZfjgabjgIHkuojmuKzjgZfjgZ/mlbDlrZfjgYzkvY3nva7jgoLmlbDlrZfjgoLlkIjjgaPjgabjgYTjgovloLTlkIjjga/jgIxoaXTjgI3jgIHkvY3nva7jga/plpPpgZXjgaPjgabjgYTjgovjgYzmlbDlrZfjga/lkIjjgaPjgabjgYTjgovjgajjgYTjgYbloLTlkIjjga/jgIxibG9344CN44Go6KGo56S644GV44KM44G+44GZ44CCPC9wPlxuICAgIDxkaXY+XG4gICAgICA8cD4z44Gk44Gu5pWw5a2X44KS6YG45oqe44GX44Gm44GtITwvcD5cbiAgICAgIDxkaXYgaWQ9XCJyZW5kZXJcIiBjbGFzcz1cInNlbGVjdC13cmFwcGVyXCI+PC9kaXY+XG4gICAgICA8YnIvPlxuICAgICAgPHNwYW5wPumBuOaKnuOBl+OBn+aVsOWtl+KGkjwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwic2VsZWN0XCI+PC9zcGFuPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnV0dG9uIGlkPVwicmVzZXRcIj7mlbDlrZfjgpLjg6rjgrvjg4Pjg4ghPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInN0YXJ0LWJ1dHRvblwiPumAgeS/oSE8L2J1dHRvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPuODreOCsDwvcD5cbiAgICAgICAgPGRpdiBpZD1cImxvZ1wiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSGl0QW5kQmxvdyB9IGZyb20gJy4vY2xhc3MvaGl0YW5kYmxvdyc7XG5pbXBvcnQgeyBtYWluUGFnZSB9IGZyb20gJy4vbWFpbi5wYWdlJztcblxuY29uc3QgaGl0YW5kYmxvdyA9IG5ldyBIaXRBbmRCbG93KCk7XG5sZXQgbGlzdDogc3RyaW5nW10gPSBbXTtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpITtcbmFwcC5pbm5lckhUTUwgPSBtYWluUGFnZTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAncmVuZGVyJ1xuICApIS5pbm5lckhUTUwgKz0gYDxzcGFuPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT0ke2l9IG5hbWU9XCJudW1iZXJcIj5cbiAgPGxhYmVsPiR7aX08L2xhYmVsPjwvc3Bhbj5gO1xufVxuXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4pIGFzIE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD47XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3gubGVuZ3RoOyBpKyspIHtcbiAgY2hlY2tib3hbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKF8pID0+IHtcbiAgICBpZiAobGlzdC5sZW5ndGggPj0gMykge1xuICAgICAgYWxlcnQoJ+aVsOWtl+OBrzPjgaTpgbjmip7jgZfjgabjga0hJyk7XG4gICAgICBpZiAobGlzdC5pbmNsdWRlcyhjaGVja2JveFtpXS52YWx1ZSkpIHtcbiAgICAgICAgY2hlY2tib3hbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICB9IGVsc2UgY2hlY2tib3hbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNoZWNrYm94W2ldLmNoZWNrZWQpIHtcbiAgICAgIGNoZWNrYm94W2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnB1c2goaS50b1N0cmluZygpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKSEuaW5uZXJIVE1MICs9IGAke2l9YDtcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1idXR0b24nKTtcbnN0YXJ0QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaGl0YW5kYmxvdy5wbGF5KGxpc3QpO1xuICBsaXN0ID0gW107XG59KTtcblxuY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXQnKTtcbnJlc2V0QnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGlzdCA9IFtdO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0JykhLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgY2hlY2tib3hbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICB9XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGhpdGFuZGJsb3cuc2V0dGluZygpO1xuICBsaXN0ID0gW107XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==