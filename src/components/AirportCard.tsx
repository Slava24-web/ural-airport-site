import React from 'react';
import {IAirport} from "../models/models";

type Props = {
    airport: IAirport,
}

const AirportCard: React.FC = ({ airport }: Props) => {
    return (
        <div>
            Card
        </div>
    );
};

export default AirportCard;
