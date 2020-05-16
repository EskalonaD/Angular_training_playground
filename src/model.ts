import { Component, ComponentRef, Type } from '@angular/core';
import { StoryWrapperComponent } from './app/story-wrapper/story-wrapper.component';

export interface StoryOutputs {
    click?: (...args: any[]) => any;
    focus?: (...args: any[]) => any;
    blur?: (...args: any[]) => any;
    hover?: (...args: any[]) => any;
    keyDown?: (...args: any[]) => any;
    keyUp?: (...args: any[]) => any;
    [eventName: string]: (...args: any[]) => any;
}

export interface StoryInputs {
    component: Type<any>;
    inputs?: any;
    outputs?: StoryOutputs;
    [inputName: string]: any;
}

export interface StoryReturn {
    component: Type<StoryWrapperComponent>;
    inputs: StoryInputs;
    outputs?: StoryOutputs;
}
