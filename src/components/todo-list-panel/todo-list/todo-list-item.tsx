import * as React from "react";
import { Todo, TodoIdType } from "domain/todo";
import { TodoActionsPanel } from "./todo-list-item/todo-actions-panel";
import { TodoPanel } from "./todo-list-item/todo-panel";
import { TodoRenamePanel } from "./todo-list-item/todo-rename-panel";

export interface TodoListItemProps {
  todo: Todo;
  completeTodo(id: TodoIdType): void;
  deleteTodo(id: TodoIdType): void;
  moveTodoUp(id: TodoIdType, listItemRef: React.RefObject<HTMLDivElement>): void;
  moveTodoDown(id: TodoIdType, listItemRef: React.RefObject<HTMLDivElement>): void;
  renameTodo(id: TodoIdType, name: string): void;
}

enum PanelType {
  DefaultPanel,
  ActionsPanel,
  RenamePanel,
}

interface TodoListItemState {
  panel: PanelType;
}

export class TodoListItem extends React.PureComponent<TodoListItemProps, TodoListItemState> {
  constructor(props: TodoListItemProps) {
    super(props);
    this.state = {
      panel: PanelType.DefaultPanel
    };
  }
  completeTodo = () => {
    this.props.completeTodo(this.props.todo.id);
  }
  deleteTodo = () => {
    this.props.deleteTodo(this.props.todo.id);
  }
  moveTodoUp = (listItemRef: React.RefObject<HTMLDivElement>) => {
    this.props.moveTodoUp(this.props.todo.id, listItemRef);
  }
  moveTodoDown = (listItemRef: React.RefObject<HTMLDivElement>) => {
    this.props.moveTodoDown(this.props.todo.id, listItemRef);
  }
  renameTodo = (name: string) => {
    this.props.renameTodo(this.props.todo.id, name);
  }
  showDefaultPanel = () => {
    this.setState({
      panel: PanelType.DefaultPanel
    });
  }
  showActionsPanel = () => {
    this.setState({
      panel: PanelType.ActionsPanel
    });
  }
  showRenamePanel = () => {
    this.setState({
      panel: PanelType.RenamePanel
    });
  }
  render() {
    let panel: JSX.Element | null;
    switch (this.state.panel) {
      case PanelType.DefaultPanel: {
        panel =
          <TodoPanel
            todo={this.props.todo}
            completeTodo={this.completeTodo}
            showActionsPanel={this.showActionsPanel}
          />;
        break;
      }
      case PanelType.ActionsPanel: {
        panel =
          <TodoActionsPanel
            todo={this.props.todo}
            deleteTodo={this.deleteTodo}
            moveTodoUp={this.moveTodoUp}
            moveTodoDown={this.moveTodoDown}
            showDefaultPanel={this.showDefaultPanel}
            showRenamePanel={this.showRenamePanel}
          />;
        break;
      }
      case PanelType.RenamePanel: {
        panel =
          <TodoRenamePanel
            todo={this.props.todo}
            renameTodo={this.renameTodo}
            showDefaultPanel={this.showDefaultPanel}
          />;
        break;
      }
      default: {
        panel = null;
        break;
      }
    }
    return panel;
  }
}
