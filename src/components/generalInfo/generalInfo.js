import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto"
import { fetchData } from "../../services/fetchData"
import "./generalInfo.css"

const GeneralInfo = () => {
    const [userData, setUserData] = useState({
        labels: ["Human", "Non-Human"],
        datasets: [
        {
            label: "Characters Count",
            data: [0, 0],
            backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1"],
            borderColor: "black",
            borderWidth: 2,
        },
        ],
    })

    const requestData = "character"

    const getCharacterData = async () => {
        try {
        const response = await fetchData({ requestData })
        const humanCount = response.filter((character) => character.species === "Human").length
        const nonHumanCount = response.length - humanCount

        setUserData({
            labels: ["Human", "Non-Human"],
            datasets: [
            {
                label: "Characters Count",
                data: [humanCount, nonHumanCount],
                backgroundColor: ["rgba(75,192,192,1)", "#ecf0f1"],
                borderColor: "black",
                borderWidth: 2,
            },
            ],
        })
        } catch (error) {
        console.error(error)
        }
    }

    useEffect(() => {
        getCharacterData()
    }, [])

    return (
        <div className="general-info">
        <div className="general-info__container">
            <Bar data={userData} options={{ maintainAspectRatio: false, responsive: true }} />
        </div>
        </div>
    )
}

export default GeneralInfo