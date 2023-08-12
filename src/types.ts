import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface formElementType {
    id: number,
    label: string,
    type: string,
    options?: string[] 
  }

export interface formType {
    id?:number,
    name:string,
    elements: formElementType[]
  }

export interface GenericFormElementType {
    element: string, 
    index: number,
    dispatch: any,
    removeElement: ActionCreatorWithPayload<any>
}  

export interface FormElementsState {
    value: string[]
}

export interface ThemeState {
    value: string
}