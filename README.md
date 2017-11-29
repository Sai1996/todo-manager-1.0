# todo-manager-1.0
A simple tool that helps manage to-do items

## Component - Side section **_(With colors range from light to dark according to different state: chosen, hovered, etc.)_**
* Component - Logo
    * "Todo Manager" in the upper part
* Component - Menu
    * Component - Menu items
        * Status _(icon + text, lines to separate them)_
         ("All"   "Active" "Completed") 
        * Date _(icon + text, lines to separate them)_
         ("Yesterday" "Today" "Tomorrow" "Other Date")

## Component - Body section
* Component - Input Box

* Component - TodoItem _(lines to separate them)_
    * Checkbox 
    * Text **_(automatically split into lines and always keep a fixed width)_**
    * Edit _(changes to check while editting)_ & complete signs **_(only shown when hovered)_**
*  Component - Delete button **_(show hidden icon from right to left when hovered)_**
* Slider **_(expand only within the range of todo items, not to reach the upper part)_**