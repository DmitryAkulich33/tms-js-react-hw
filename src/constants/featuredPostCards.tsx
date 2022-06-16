import {IPostCard} from "../types/IPostCard";
import user from "./user";

const featuredPostCards: Array<IPostCard> = [
    {
        id: "1",
        title: "D-Orbit charts ambitious course for space logistics business",
        description: "D-Orbit has ambitious plans to offer a wide variety of satellite services from active debris removal to space-based cloud computing.",
        imageUrl: "https://spacenews.com/wp-content/uploads/2021/06/rsz_screen_shot_2021-05-31_at_25648_pm.png",
        postDate: "22 July 2019",
        user: user,
    },
    {
        id: "2",
        title: "Fourth SLS countdown test set for June 20",
        description: "NASA is gearing up for a fourth attempt to perform a fueling test and practice countdown of its Space Launch System ahead of a launch now no earlier than the latter half of August.",
        imageUrl: "https://spacenews.com/wp-content/uploads/2022/06/sls-20220614.jpg",
        postDate: "13 July 2019",
        user: user,
    },
    {
        id: "3",
        title: "OneWeb tests inflight connectivity on Boeing 777",
        description: "OneWeb said June 14 it successfully tested high-speed services on a commercial airliner last month using its low Earth orbit network.",
        imageUrl: "https://spacenews.com/wp-content/uploads/2022/06/OneWeb-antenna-tests.jpg",
        postDate: "11 July 2018",
        user: user,
    },
    {
        id: "4",
        title: "House appropriators approve funding increase for DoD",
        description: "The House Appropriations Committee’s defense subcommittee on June 15 approved by voice vote a defense funding bill for fiscal year 2023.",
        imageUrl: "https://spacenews.com/wp-content/uploads/2022/06/51834847201_bb9ac1e2ab_k-e1655326520624.jpg",
        postDate: "10 May 2017",
        user: user,
    }
]

export default featuredPostCards;