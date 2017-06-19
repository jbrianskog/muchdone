import { Todo, CompletedTodo } from "../domain/todo";
import { templateClone, fillContentElements } from "../utils";

export function todoTitleController(todo: Todo | CompletedTodo): DocumentFragment {
    let titleFragment = new DocumentFragment();
    titleFragment.textContent = todo.name;
    if (todo.isCompleted) {
        let completionDateFragment = templateClone("todoCompletionDateTemplate");
        let date = new Date((todo as CompletedTodo).completionTimestamp);
        fillContentElements(completionDateFragment, "completionDate", date.toLocaleDateString());
        titleFragment.appendChild(completionDateFragment);
    }
    return titleFragment;
}