import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "src/features/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
