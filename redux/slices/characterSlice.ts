'use client';
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {Info, tCharacter} from "@/app/types/character";

interface CharacterState {
    currentPage: number,
    characters: tCharacter[],
    info: Info,
    pages: number,
}

const initialState: CharacterState = {
    currentPage: 1,
    characters: [],
    info: {
        count: 0,
        pages: 0,
        next: '',
        prev: '',
    },
    pages: 0,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setCharacters: (state, action: PayloadAction<tCharacter[]>) => {
            state.characters = action.payload;
        },
        setInfo: (state, action: PayloadAction<Info>) => {
            state.info = action.payload
        },
        setPages: (state, action: PayloadAction<number>) => {
            state.pages = action.payload
        }
    },
})


export const {
    setCurrentPage,
    setPages,
    setInfo,
    setCharacters
} = characterSlice.actions

export const selectCurrentPage = (state: RootState) => state.character.currentPage
export const selectCharacters = (state: RootState) => state.character.characters
export const selectInfo = (state: RootState) => state.character.info
export const selectPages = (state: RootState) => state.character.pages

export default characterSlice.reducer
