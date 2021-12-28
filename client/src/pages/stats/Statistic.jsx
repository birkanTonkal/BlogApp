import React from "react";
import { useContext, useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import axios from "axios";
import { AuthContext } from "../../helpers/Context/AuthContext";


function Statistic() {
    const { account } = useContext(AuthContext);
    const [dates, setDates] = useState([]);
    let data = [];
    useEffect(() => {
        const stats = async (req, res) => {
            try {
                const dates = await axios.get(
                    "/post/?user=" + account.username
                );
                let allDates = dates.data.map((e) => {
                    return new Date(e.createdAt).toLocaleDateString();
                });
                setDates(allDates);
            } catch (e) {
                console.log(e);
            }
        };
        stats();
    }, []);
    dates.forEach((e) => {
        let obj = { name: e, numberOfBlog: 1 };
        let index = data.findIndex((x) => x.name === e);
        if (index > -1) {
            data[index].numberOfBlog = data[index].numberOfBlog + 1;
        } else {
            data.push(obj);
        }
    });
    return (
        <div className="statistic-container">
            <div className="wrapper">
                <BarChart
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="numberOfBlog" fill={"#" + Math.floor(Math.random()*(585858 - 575757) + 575757)} />
                </BarChart>
            </div>
        </div>
    );
}

export default Statistic;
