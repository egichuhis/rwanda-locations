import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  locations: [],
  districts: [],
  error: '',
};

const rapidApiKey = '591fdc8e79mshee79e5982913705p1921b9jsnf2f12ca11828';
const rapidApiHost = 'rwanda.p.rapidapi.com';

const regionsOptions = {
  method: 'GET',
  url: 'https://rwanda.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': rapidApiKey,
    'X-RapidAPI-Host': rapidApiHost,
  },
};

export const fetchLocations = createAsyncThunk('location/fetchLocations', async () => {
  const response = await axios.request(regionsOptions);
  return response.data.data;
});

export const fetchDistricts = createAsyncThunk('districts/fetchDistricts', async (region) => {
  const districtsOptions = {
    method: 'GET',
    url: 'https://rwanda.p.rapidapi.com/districts',
    params: { p: region },
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': rapidApiHost,
    },
  };

  const response = await axios.request(districtsOptions);
  return response.data;
});

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.loading = false;
      state.locations = action.payload;
      state.error = '';
    });
    builder.addCase(fetchLocations.rejected, (state, action) => {
      state.loading = false;
      state.locations = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchDistricts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDistricts.fulfilled, (state, action) => {
      state.loading = false;
      state.districts = action.payload.data;
      state.error = '';
    });
    builder.addCase(fetchDistricts.rejected, (state, action) => {
      state.loading = false;
      state.districts = [];
      state.error = action.error.message;
    });
  },
});

export default locationSlice.reducer;
