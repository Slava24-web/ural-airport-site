import React, {useEffect} from 'react';
import AirportSearch from "../components/AirportSearch";
import AirportFilter from "../components/AirportFilter";
import AirportCard from "../components/AirportCard";
import {fetchAirports} from "../store/actions/airportActions";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {AppDispatch} from "../store";
import {IAirport} from "../models/models";

const MainPage: React.FC = () => {
    const dispatch: AppDispatch = useAppDispatch();

    const { error, loading, airports } = useAppSelector(state => state.airport);

    useEffect(() => {
        dispatch(fetchAirports());
    }, []);

    return (
        <div className="container mx-auto max-w-[760px] pt-5">
            <AirportSearch />
            <AirportFilter />

            {
                airports.map((airport: IAirport) => (
                    <AirportCard key={airport.id} airport={airport} />
                ))
            }
        </div>
    );
};

export default MainPage;
