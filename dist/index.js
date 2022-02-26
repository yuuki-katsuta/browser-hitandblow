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
// as constにより["nomal", "hard"]型に固定できる。扱う上でstring[]に変換されるのを防ぐ
const modes = ['nomal', 'hard'];
//implementsで,HitAndBlowクラスはGameの抽象クラスを実装するということ
class HitAndBlow {
    constructor() {
        //初期値のセットは演算処理がなければ constructorを介す必要はない
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
            //包含関係なので型アサーションを活用（返って来たstring型をMode型として扱う）
            // this.mode = await promptSelect<Mode>('モードを入力してください', modes);
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
                //到達不能なコードなのでnever型が推論
                //caseの書き忘れはnever型を活用
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
                console.log(`---\nHit: ${result.hit}\nBlow: ${result.blow}\n---`);
                const log = document.getElementById('log');
                const ele = document.createElement('ul');
                ele.innerHTML = `${input}: Hit: ${result.hit} Blow: ${result.blow}`;
                log === null || log === void 0 ? void 0 : log.appendChild(ele);
                this.tryCount += 1;
            }
        });
    }
    //外部からアクセスしているわけではないのでprivate修飾子を付与
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
        //インスタンス内のデータをクリア
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7SUFDbkMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3JCLElBQUksR0FBRyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jyb3dzZXItaGl0LWFuZC1ibG93Ly4vdHMvY2xhc3MvaGl0YW5kYmxvdy50cyIsIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy8uL3RzL21haW4ucGFnZS50cyIsIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJvd3Nlci1oaXQtYW5kLWJsb3cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icm93c2VyLWhpdC1hbmQtYmxvdy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jyb3dzZXItaGl0LWFuZC1ibG93Ly4vdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXMgY29uc3TjgavjgojjgopbXCJub21hbFwiLCBcImhhcmRcIl3lnovjgavlm7rlrprjgafjgY3jgovjgILmibHjgYbkuIrjgadzdHJpbmdbXeOBq+WkieaPm+OBleOCjOOCi+OBruOCkumYsuOBkFxuY29uc3QgbW9kZXMgPSBbJ25vbWFsJywgJ2hhcmQnXSBhcyBjb25zdDtcbi8vW13jgaflnovjgpLmir3lh7rjgafjgY3jgovjgIJudW1iZXLjgq3jg7zjg6/jg7zjg4njgavjgojjgorjgZnjgbnjgabjga7kuK3ouqvjgpLlj5bjgorlh7rjgZvjgotcbnR5cGUgTW9kZSA9IHR5cGVvZiBtb2Rlc1tudW1iZXJdO1xuXG4vL2ltcGxlbWVudHPjgacsSGl0QW5kQmxvd+OCr+ODqeOCueOBr0dhbWXjga7mir3osaHjgq/jg6njgrnjgpLlrp/oo4XjgZnjgovjgajjgYTjgYbjgZPjgahcbmV4cG9ydCBjbGFzcyBIaXRBbmRCbG93IHtcbiAgLy/liJ3mnJ/lgKTjga7jgrvjg4Pjg4jjga/mvJTnrpflh6bnkIbjgYzjgarjgZHjgozjgbAgY29uc3RydWN0b3LjgpLku4vjgZnlv4XopoHjga/jgarjgYRcbiAgcHJpdmF0ZSByZWFkb25seSBhbnN3ZXJTb3VyY2UgPSBbXG4gICAgJzAnLFxuICAgICcxJyxcbiAgICAnMicsXG4gICAgJzMnLFxuICAgICc0JyxcbiAgICAnNScsXG4gICAgJzYnLFxuICAgICc3JyxcbiAgICAnOCcsXG4gICAgJzknLFxuICBdO1xuICBwcml2YXRlIGFuc3dlcjogc3RyaW5nW10gPSBbXTtcbiAgcHJpdmF0ZSB0cnlDb3VudCA9IDA7XG4gIHByaXZhdGUgbW9kZTogTW9kZSA9ICdub21hbCc7XG5cbiAgLy/vvJPjgaTjga7mlbDlrZfjgpLmsbrlrppcbiAgYXN5bmMgc2V0dGluZygpIHtcbiAgICAvL+WMheWQq+mWouS/guOBquOBruOBp+Wei+OCouOCteODvOOCt+ODp+ODs+OCkua0u+eUqO+8iOi/lOOBo+OBpuadpeOBn3N0cmluZ+Wei+OCkk1vZGXlnovjgajjgZfjgabmibHjgYbvvIlcbiAgICAvLyB0aGlzLm1vZGUgPSBhd2FpdCBwcm9tcHRTZWxlY3Q8TW9kZT4oJ+ODouODvOODieOCkuWFpeWKm+OBl+OBpuOBj+OBoOOBleOBhCcsIG1vZGVzKTtcbiAgICBjb25zdCBhbnN3ckxlbmd0aCA9IHRoaXMuZ2V0QW5zd2VyTGVuZ3RoKCk7XG4gICAgd2hpbGUgKHRoaXMuYW5zd2VyLmxlbmd0aCA8IGFuc3dyTGVuZ3RoKSB7XG4gICAgICBjb25zdCBudW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmFuc3dlclNvdXJjZS5sZW5ndGgpO1xuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5hbnN3ZXJTb3VyY2VbbnVtXTtcbiAgICAgIGlmICghdGhpcy5hbnN3ZXIuaW5jbHVkZXMoc2VsZWN0ZWRJdGVtKSkge1xuICAgICAgICB0aGlzLmFuc3dlci5wdXNoKHNlbGVjdGVkSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbnN3ZXJMZW5ndGgoKSB7XG4gICAgc3dpdGNoICh0aGlzLm1vZGUpIHtcbiAgICAgIGNhc2UgJ25vbWFsJzpcbiAgICAgICAgcmV0dXJuIDM7XG4gICAgICBjYXNlICdoYXJkJzpcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvL+WIsOmBlOS4jeiDveOBquOCs+ODvOODieOBquOBruOBp25ldmVy5Z6L44GM5o6o6KuWXG4gICAgICAgIC8vY2FzZeOBruabuOOBjeW/mOOCjOOBr25ldmVy5Z6L44KS5rS755SoXG4gICAgICAgIGNvbnN0IG5ldmVyVmFsdWU6IG5ldmVyID0gdGhpcy5tb2RlO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bmV2ZXJWYWx1ZX3jga/nhKHlirnjgarjg6Ljg7zjg4njgafjgZkuLi5gKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBwbGF5KGlucHV0OiBzdHJpbmdbXSkge1xuICAgIGlmICghdGhpcy52YWxpZGF0ZShpbnB1dCkpIHtcbiAgICAgIGFsZXJ0KCfnhKHlirnjgarlhaXlipvjgafjgZkhJyk7XG4gICAgICB0aGlzLmluaXQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jaGVjayhpbnB1dCk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgaWYgKHJlc3VsdC5oaXQgPT09IDMpIHtcbiAgICAgIHRoaXMuZW5kKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXN1bHQuaGl0ID09PSB0aGlzLmFuc3dlci5sZW5ndGgpIHRoaXMudHJ5Q291bnQgKz0gMTtcbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGAtLS1cXG5IaXQ6ICR7cmVzdWx0LmhpdH1cXG5CbG93OiAke3Jlc3VsdC5ibG93fVxcbi0tLWApO1xuICAgICAgY29uc3QgbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZycpO1xuICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIGVsZS5pbm5lckhUTUwgPSBgJHtpbnB1dH06IEhpdDogJHtyZXN1bHQuaGl0fSBCbG93OiAke3Jlc3VsdC5ibG93fWA7XG4gICAgICBsb2c/LmFwcGVuZENoaWxkKGVsZSk7XG4gICAgICB0aGlzLnRyeUNvdW50ICs9IDE7XG4gICAgfVxuICB9XG5cbiAgLy/lpJbpg6jjgYvjgonjgqLjgq/jgrvjgrnjgZfjgabjgYTjgovjgo/jgZHjgafjga/jgarjgYTjga7jgadwcml2YXRl5L+u6aO+5a2Q44KS5LuY5LiOXG4gIHByaXZhdGUgY2hlY2soaW5wdXQ6IHN0cmluZ1tdKSB7XG4gICAgbGV0IGhpdENvdW50ID0gMDtcbiAgICBsZXQgYmxvd0NvdW50ID0gMDtcblxuICAgIGlucHV0LmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh2YWwgPT09IHRoaXMuYW5zd2VyW2luZGV4XSkgaGl0Q291bnQgKz0gMTtcbiAgICAgIGVsc2UgaWYgKHRoaXMuYW5zd2VyLmluY2x1ZGVzKHZhbCkpIGJsb3dDb3VudCArPSAxO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBoaXQ6IGhpdENvdW50LFxuICAgICAgYmxvdzogYmxvd0NvdW50LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlKGlucHV0QXJyOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGlzTGVuZ3RoVmFsaWQgPSBpbnB1dEFyci5sZW5ndGggPT09IHRoaXMuYW5zd2VyLmxlbmd0aDtcbiAgICAvL2Fuc3dlclNvdXJjZeOBq+WQq+OBvuOCjOOCi+OBi1xuICAgIGNvbnN0IGlzQWxsQW5zd2VyU291cmNlT3B0aW9uID0gaW5wdXRBcnIuZXZlcnkoKHZhbCkgPT5cbiAgICAgIHRoaXMuYW5zd2VyU291cmNlLmluY2x1ZGVzKHZhbClcbiAgICApO1xuICAgIC8v6YeN6KSH44OB44Kn44OD44KvXG4gICAgY29uc3QgaXNBbGxEaWZmZXJlbnRWYWx1ZXMgPSBpbnB1dEFyci5ldmVyeShcbiAgICAgICh2YWwsIGkpID0+IGlucHV0QXJyLmluZGV4T2YodmFsKSA9PT0gaVxuICAgICk7XG4gICAgcmV0dXJuIGlzTGVuZ3RoVmFsaWQgJiYgaXNBbGxBbnN3ZXJTb3VyY2VPcHRpb24gJiYgaXNBbGxEaWZmZXJlbnRWYWx1ZXM7XG4gIH1cblxuICBpbml0KCkge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiXG4gICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoZWNrYm94W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdCcpIS5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICBhbGVydChg5q2j6Kej44Gn44GZISEgXFxu6Kmm6KGM5Zue5pWwOiAke3RoaXMudHJ5Q291bnR95ZueYCk7XG4gICAgLy/jgqTjg7Pjgrnjgr/jg7PjgrnlhoXjga7jg4fjg7zjgr/jgpLjgq/jg6rjgqJcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICBjb25zdCBsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJykhO1xuICAgIGxvZy5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLmFuc3dlciA9IFtdO1xuICAgIHRoaXMudHJ5Q291bnQgPSAwO1xuICAgIHRoaXMuc2V0dGluZygpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgbWFpblBhZ2U6IHN0cmluZyA9IGBcbiAgPGRpdj5IaXQgYW5kIEJsb3cg44Ky44O844OgISE8L2Rpdj5cbiAgICA8cD4w44GL44KJOeOBruaVsOWtl+OBpzPjgrHjgr/jga7mlbDlrZfjgpLkvZzjgorjgIHjgZ3jga7mlbDlrZfjgpLkuojmuKzjgZfjgabjgYTjgY/jgrLjg7zjg6DjgafjgZnjgII8YnIvPiDkuojmuKzjgZfjgZ/mlbDlrZfjgYzkvY3nva7jgoLmlbDlrZfjgoLjgYLjgaPjgabjgYTjgovloLTlkIjjga/jgIxoaXTjgI3jgIHkvY3nva7jga/plpPpgZXjgaPjgabjgYTjgovjgYzmlbDlrZfjga/lkIjjgaPjgabjgYTjgovjgajjgYTjgYbloLTlkIjjga/jgIxibG9344CN44Go6KGo56S644GV44KM44G+44GZ44CCPC9wPlxuICAgIDxkaXY+XG4gICAgICA8cD4z44Gk44Gu5pWw5a2X44KS6YG45oqe44GX44Gm44GtITwvcD5cbiAgICAgIDxmb3JtPlxuICAgICAgICA8ZGl2IGlkPVwicmVuZGVyXCI+PC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8YnIvPlxuICAgICAgPHNwYW5wPumBuOaKnuOBl+OBn+aVsOWtl+KGkjwvc3Bhbj5cbiAgICAgIDxzcGFuIGlkPVwic2VsZWN0XCI+PC9zcGFuPlxuICAgICAgPGJyLz5cbiAgICAgIDxici8+XG4gICAgICA8YnV0dG9uIGlkPVwicmVzZXRcIj7mlbDlrZfjgpLjg6rjgrvjg4Pjg4ghPC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBpZD1cInN0YXJ0LWJ1dHRvblwiPumAgeS/oSE8L2J1dHRvbj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPuODreOCsDwvcD5cbiAgICAgICAgPGRpdiBpZD1cImxvZ1wiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgSGl0QW5kQmxvdyB9IGZyb20gJy4vY2xhc3MvaGl0YW5kYmxvdyc7XG5pbXBvcnQgeyBtYWluUGFnZSB9IGZyb20gJy4vbWFpbi5wYWdlJztcblxuY29uc3QgaGl0YW5kYmxvdyA9IG5ldyBIaXRBbmRCbG93KCk7XG5sZXQgbGlzdDogc3RyaW5nW10gPSBbXTtcblxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpITtcbmFwcC5pbm5lckhUTUwgPSBtYWluUGFnZTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAncmVuZGVyJ1xuICApIS5pbm5lckhUTUwgKz0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT0ke2l9IG5hbWU9XCJudW1iZXJcIj5cbiAgPGxhYmVsPiR7aX08L2xhYmVsPmA7XG59XG5cbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCJcbikgYXMgTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PjtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveC5sZW5ndGg7IGkrKykge1xuICBjaGVja2JveFtpXS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoXykgPT4ge1xuICAgIGlmIChsaXN0Lmxlbmd0aCA+PSAzKSB7XG4gICAgICBhbGVydCgn5pWw5a2X44GvM+OBpOmBuOaKnuOBl+OBpuOBrSEnKTtcbiAgICAgIGlmIChsaXN0LmluY2x1ZGVzKGNoZWNrYm94W2ldLnZhbHVlKSkge1xuICAgICAgICBjaGVja2JveFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBjaGVja2JveFtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY2hlY2tib3hbaV0uY2hlY2tlZCkge1xuICAgICAgY2hlY2tib3hbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3QucHVzaChpLnRvU3RyaW5nKCkpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdCcpIS5pbm5lckhUTUwgKz0gYCR7aX1gO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ1dHRvbicpO1xuc3RhcnRCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBoaXRhbmRibG93LnBsYXkobGlzdCk7XG4gIGxpc3QgPSBbXTtcbn0pO1xuXG5jb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpO1xucmVzZXRCdXR0b24/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsaXN0ID0gW107XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QnKSEuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hlY2tib3gubGVuZ3RoOyBpKyspIHtcbiAgICBjaGVja2JveFtpXS5jaGVja2VkID0gZmFsc2U7XG4gIH1cbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgaGl0YW5kYmxvdy5zZXR0aW5nKCk7XG4gIGxpc3QgPSBbXTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9