import axios from "../../axios";
import {AppDispatch} from "../index";
import {IAirport, ServerResponse} from "../../models/models";
import airportSlice from "../slices/AirportSlice";

export const fetchAirports = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(airportSlice.actions.fetching());
        const response = await axios.get<ServerResponse<IAirport>>('airports');
        dispatch(airportSlice.actions.fetchSuccess(response.data.results));
    } catch (e) {
        dispatch(airportSlice.actions.fetchError(e as Error));
    }
}