import React from "react";
import { LineWave } from "react-loader-spinner";

export const LineWaveLoader: React.FC = () => {
    return (
        <LineWave
            height={100}
            width={100}
            color="#F5F5F5"
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            visible={true}
        />
    );
};
