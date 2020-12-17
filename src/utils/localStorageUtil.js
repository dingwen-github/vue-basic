/**
 * localStorage工具类
 * dingwen
 * 2020/12/16
 * @type {string}
 */
const TODO = 'dingwen-todo';
export default {
    readTodoList() {
        return JSON.parse(localStorage.getItem(TODO)) || [{title: 'test',finished: false}];
    },
    saveTodoList(todoList) {
        localStorage.setItem(TODO, JSON.stringify(todoList))
    }
}
