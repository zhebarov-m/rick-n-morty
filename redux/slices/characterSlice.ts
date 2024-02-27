'use client';
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {RootState} from '../store'
import {tCharacter} from "@/app/types/character";

interface CharacterState {
    page: number,
    characters: tCharacter[]
}

const initialState: CharacterState = {
    page: 1,
    characters: []
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setCharacters: (state, action: PayloadAction<tCharacter[]>) => {
            state.characters = action.payload;
        }
    },
})


export const {setPage, setCharacters} = characterSlice.actions

export const selectPage = (state: RootState) => state.character.page
export const selectCharacters = (state: RootState) => state.character.characters

export default characterSlice.reducer
