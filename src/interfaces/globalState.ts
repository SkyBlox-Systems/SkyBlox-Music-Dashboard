import { useState } from 'react';

type IBooleanStateRT = ReturnType<typeof useState<boolean>>;

export interface IGlobalState {
    navbarShow?: IBooleanStateRT[0];
    setNavbarShow?: IBooleanStateRT[1];
    navbarAbsolute?: IBooleanStateRT[0];
    setNavbarAbsolute?: IBooleanStateRT[1];
}
