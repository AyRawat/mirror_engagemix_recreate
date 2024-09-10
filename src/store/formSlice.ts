// src/store/formSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AccountData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface ProductData {
  companyName: string;
  companyDomain: string;
  companyDescription: string;
}

type Source = 'hackernews' | 'reddit' | 'linkedin' | 'twitter' | 'quora';

interface SearchConfig {
  platforms: Source[];
}

interface FormState {
  accountData: AccountData;
  productData: ProductData;
  keywords: string[];
  searchConfig: SearchConfig;
  currentStep: number;
}

const initialState: FormState = {
  accountData: { email: '', password: '', firstName: '', lastName: '' },
  productData: { companyName: '', companyDomain: '', companyDescription: '' },
  keywords: [],
  searchConfig: { platforms: [] },
  currentStep: 1,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setAccountData(state, action: PayloadAction<AccountData>) {
      state.accountData = action.payload;
    },
    setProductData(state, action: PayloadAction<ProductData>) {
      state.productData = action.payload;
    },
    setKeywords(state, action: PayloadAction<string[]>) {
      state.keywords = action.payload;
    },
    setSearchConfig(state, action: PayloadAction<SearchConfig>) {
      state.searchConfig = action.payload;
    },
    setCurrentStep(state, action: PayloadAction<number>) {
      state.currentStep = action.payload;
    },
  },
});

export const {
  setAccountData,
  setProductData,
  setKeywords,
  setSearchConfig,
  setCurrentStep,
} = formSlice.actions;

export default formSlice.reducer;