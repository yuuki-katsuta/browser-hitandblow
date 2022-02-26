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
    <p>0から9の数字で3ケタの数字を作り、その数字を予測していくゲームです。<br/> 予測した数字が位置も数字もあっている場合は「hit」、位置は間違っているが数字は合っているという場合は「blow」と表示されます。</p>
    <div>
      <p>3つの数字を選択してね!</p>
      <form>
        <div id="render"></div>
      </form>
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
    document.getElementById('render').innerHTML += `<input type="checkbox" value=${i} name="number">
  <label>${i}</label>`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBRSxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7Q0FDSjtBQUVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDNUQsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3JELFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQzFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDVixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDN0I7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0lBQ25DLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNyQixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1osQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy8uL3RzL2NsYXNzL2hpdGFuZGJsb3cudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvLi90cy9tYWluLnBhZ2UudHMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jyb3dzZXItaGl0LWFuZC1ibG93L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy8uL3RzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vZGVzID0gWydub21hbCcsICdoYXJkJ10gYXMgY29uc3Q7XG50eXBlIE1vZGUgPSB0eXBlb2YgbW9kZXNbbnVtYmVyXTtcbmV4cG9ydCBjbGFzcyBIaXRBbmRCbG93IHtcbiAgcHJpdmF0ZSByZWFkb25seSBhbnN3ZXJTb3VyY2UgPSBbXG4gICAgJzAnLFxuICAgICcxJyxcbiAgICAnMicsXG4gICAgJzMnLFxuICAgICc0JyxcbiAgICAnNScsXG4gICAgJzYnLFxuICAgICc3JyxcbiAgICAnOCcsXG4gICAgJzknLFxuICBdO1xuICBwcml2YXRlIGFuc3dlcjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSB0cnlDb3VudCA9IDA7XG4gIHByaXZhdGUgbW9kZTogTW9kZSA9ICdub21hbCc7XG5cbiAgLy/vvJPjgaTjga7mlbDlrZfjgpLmsbrlrppcbiAgYXN5bmMgc2V0dGluZygpIHtcbiAgICBjb25zdCBhbnN3ckxlbmd0aCA9IHRoaXMuZ2V0QW5zd2VyTGVuZ3RoKCk7XG4gICAgd2hpbGUgKHRoaXMuYW5zd2VyLmxlbmd0aCA8IGFuc3dyTGVuZ3RoKSB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmFuc3dlclNvdXJjZS5sZW5ndGgpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5hbnN3ZXJTb3VyY2VbbnVtXTtcbiAgICAgIGlmICghdGhpcy5hbnN3ZXIuaW5jbHVkZXMoc2VsZWN0ZWRJdGVtKSkge1xuICAgICAgICB0aGlzLmFuc3dlci5wdXNoKHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbnN3ZXJMZW5ndGgoKSB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ25vbWFsJzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlICdoYXJkJzpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zdCBuZXZlclZhbHVlOiBuZXZlciA9IHRoaXMubW9kZTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke25ldmVyVmFsdWV944Gv54Sh5Yq544Gq44Oi44O844OJ44Gn44GZLi4uYCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcGxheShpbnB1dDogc3RyaW5nW10pIHtcbiAgICBpZiAoIXRoaXMudmFsaWRhdGUoaW5wdXQpKSB7XG4gICAgICBhbGVydCgn54Sh5Yq544Gq5YWl5Yqb44Gn44GZIScpO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2hlY2soaW5wdXQpO1xuICAgIHRoaXMuaW5pdCgpO1xuICAgIGlmIChyZXN1bHQuaGl0ID09PSAzKSB7XG4gICAgICB0aGlzLmVuZCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzdWx0LmhpdCA9PT0gdGhpcy5hbnN3ZXIubGVuZ3RoKSB0aGlzLnRyeUNvdW50ICs9IDE7XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJyk7XG4gICAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgZWxlLmlubmVySFRNTCA9IGAke2lucHV0fTogSGl0OiAke3Jlc3VsdC5oaXR9IEJsb3c6ICR7cmVzdWx0LmJsb3d9YDtcbiAgICAgIGxvZz8uYXBwZW5kQ2hpbGQoZWxlKTtcbiAgICAgIHRoaXMudHJ5Q291bnQgKz0gMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrKGlucHV0OiBzdHJpbmdbXSkge1xuICAgIGxldCBoaXRDb3VudCA9IDA7XG4gICAgbGV0IGJsb3dDb3VudCA9IDA7XG5cbiAgICBpbnB1dC5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodmFsID09PSB0aGlzLmFuc3dlcltpbmRleF0pIGhpdENvdW50ICs9IDE7XG4gICAgICBlbHNlIGlmICh0aGlzLmFuc3dlci5pbmNsdWRlcyh2YWwpKSBibG93Q291bnQgKz0gMTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgaGl0OiBoaXRDb3VudCxcbiAgICAgIGJsb3c6IGJsb3dDb3VudCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZShpbnB1dEFycjogc3RyaW5nW10pIHtcbiAgICBjb25zdCBpc0xlbmd0aFZhbGlkID0gaW5wdXRBcnIubGVuZ3RoID09PSB0aGlzLmFuc3dlci5sZW5ndGg7XG4gICAgLy9hbnN3ZXJTb3VyY2XjgavlkKvjgb7jgozjgovjgYtcbiAgICBjb25zdCBpc0FsbEFuc3dlclNvdXJjZU9wdGlvbiA9IGlucHV0QXJyLmV2ZXJ5KCh2YWwpID0+XG4gICAgICB0aGlzLmFuc3dlclNvdXJjZS5pbmNsdWRlcyh2YWwpXG4gICAgKTtcbiAgICAvL+mHjeikh+ODgeOCp+ODg+OCr1xuICAgIGNvbnN0IGlzQWxsRGlmZmVyZW50VmFsdWVzID0gaW5wdXRBcnIuZXZlcnkoXG4gICAgICAodmFsLCBpKSA9PiBpbnB1dEFyci5pbmRleE9mKHZhbCkgPT09IGlcbiAgICApO1xuICAgIHJldHVybiBpc0xlbmd0aFZhbGlkICYmIGlzQWxsQW5zd2VyU291cmNlT3B0aW9uICYmIGlzQWxsRGlmZmVyZW50VmFsdWVzO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGVja2JveFtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKSEuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBlbmQoKSB7XG4gICAgYWxlcnQoYOato+ino+OBp+OBmSEhIFxcbuippuihjOWbnuaVsDogJHt0aGlzLnRyeUNvdW50feWbnmApO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2cnKSE7XG4gICAgbG9nLmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuYW5zd2VyID0gW107XG4gICAgdGhpcy50cnlDb3VudCA9IDA7XG4gICAgdGhpcy5zZXR0aW5nKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBtYWluUGFnZTogc3RyaW5nID0gYFxuICA8ZGl2PkhpdCBhbmQgQmxvdyDjgrLjg7zjg6AhITwvZGl2PlxuICAgIDxwPjDjgYvjgok544Gu5pWw5a2X44GnM+OCseOCv+OBruaVsOWtl+OCkuS9nOOCiuOAgeOBneOBruaVsOWtl+OCkuS6iOa4rOOBl+OBpuOBhOOBj+OCsuODvOODoOOBp+OBmeOAgjxici8+IOS6iOa4rOOBl+OBn+aVsOWtl+OBjOS9jee9ruOCguaVsOWtl+OCguOBguOBo+OBpuOBhOOCi+WgtOWQiOOBr+OAjGhpdOOAjeOAgeS9jee9ruOBr+mWk+mBleOBo+OBpuOBhOOCi+OBjOaVsOWtl+OBr+WQiOOBo+OBpuOBhOOCi+OBqOOBhOOBhuWgtOWQiOOBr+OAjGJsb3fjgI3jgajooajnpLrjgZXjgozjgb7jgZnjgII8L3A+XG4gICAgPGRpdj5cbiAgICAgIDxwPjPjgaTjga7mlbDlrZfjgpLpgbjmip7jgZfjgabjga0hPC9wPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXYgaWQ9XCJyZW5kZXJcIj48L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxici8+XG4gICAgICA8c3BhbnA+6YG45oqe44GX44Gf5pWw5a2X4oaSPC9zcGFuPlxuICAgICAgPHNwYW4gaWQ9XCJzZWxlY3RcIj48L3NwYW4+XG4gICAgICA8YnIvPlxuICAgICAgPGJyLz5cbiAgICAgIDxidXR0b24gaWQ9XCJyZXNldFwiPuaVsOWtl+OCkuODquOCu+ODg+ODiCE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGlkPVwic3RhcnQtYnV0dG9uXCI+6YCB5L+hITwvYnV0dG9uPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+44Ot44KwPC9wPlxuICAgICAgICA8ZGl2IGlkPVwibG9nXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5gO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBIaXRBbmRCbG93IH0gZnJvbSAnLi9jbGFzcy9oaXRhbmRibG93JztcbmltcG9ydCB7IG1haW5QYWdlIH0gZnJvbSAnLi9tYWluLnBhZ2UnO1xuXG5jb25zdCBoaXRhbmRibG93ID0gbmV3IEhpdEFuZEJsb3coKTtcbmxldCBsaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykhO1xuYXBwLmlubmVySFRNTCA9IG1haW5QYWdlO1xuZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdyZW5kZXInXG4gICkhLmlubmVySFRNTCArPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPSR7aX0gbmFtZT1cIm51bWJlclwiPlxuICA8bGFiZWw+JHtpfTwvbGFiZWw+YDtcbn1cblxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIlxuKSBhcyBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IGNoZWNrYm94Lmxlbmd0aDsgaSsrKSB7XG4gIGNoZWNrYm94W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChfKSA9PiB7XG4gICAgaWYgKGxpc3QubGVuZ3RoID49IDMpIHtcbiAgICAgIGFsZXJ0KCfmlbDlrZfjga8z44Gk6YG45oqe44GX44Gm44GtIScpO1xuICAgICAgaWYgKGxpc3QuaW5jbHVkZXMoY2hlY2tib3hbaV0udmFsdWUpKSB7XG4gICAgICAgIGNoZWNrYm94W2ldLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGNoZWNrYm94W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjaGVja2JveFtpXS5jaGVja2VkKSB7XG4gICAgICBjaGVja2JveFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5wdXNoKGkudG9TdHJpbmcoKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0JykhLmlubmVySFRNTCArPSBgJHtpfWA7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtYnV0dG9uJyk7XG5zdGFydEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGhpdGFuZGJsb3cucGxheShsaXN0KTtcbiAgbGlzdCA9IFtdO1xufSk7XG5cbmNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0Jyk7XG5yZXNldEJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxpc3QgPSBbXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdCcpIS5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveC5sZW5ndGg7IGkrKykge1xuICAgIGNoZWNrYm94W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBoaXRhbmRibG93LnNldHRpbmcoKTtcbiAgbGlzdCA9IFtdO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=