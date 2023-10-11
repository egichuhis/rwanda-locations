import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';
import {
  fetchLocations,
  fetchDistricts,
} from '../redux/features/location/locationSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Async Actions', () => {
  it('should fetch locations successfully', () => {
    const store = mockStore({ location: { loading: false, locations: [], error: '' } });

    return store.dispatch(fetchLocations()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchLocations.pending.type);
      expect(actions[1].type).toEqual(fetchLocations.fulfilled.type);
      expect(actions[1].payload).toBeDefined();
    });
  });

  it('should handle location fetch error', () => {
    const store = mockStore({ location: { loading: false, locations: [], error: '' } });

    // Mocking a failed API call by overriding the axios request
    const axiosMock = jest.spyOn(axios, 'request');
    axiosMock.mockRejectedValue(new Error('Network Error'));

    return store.dispatch(fetchLocations()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchLocations.pending.type);
      expect(actions[1].type).toEqual(fetchLocations.rejected.type);
      expect(actions[1].error.message).toEqual('Network Error');
    });
  });

  it('should handle district fetch error', () => {
    const store = mockStore({
      location: { loading: false, districts: [], error: '' },
    });

    // Mocking a failed API call by overriding the axios request
    const axiosMock = jest.spyOn(axios, 'request');
    axiosMock.mockRejectedValue(new Error('Network Error'));

    const mockRegion = 'Kigali';

    return store.dispatch(fetchDistricts(mockRegion)).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(fetchDistricts.pending.type);
      expect(actions[1].type).toEqual(fetchDistricts.rejected.type);
      expect(actions[1].error.message).toEqual('Network Error');
    });
  });
});
