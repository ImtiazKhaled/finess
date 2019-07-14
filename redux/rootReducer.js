
const initialState = {
    logs:
        [{ "id": 1, "happyMemory": "convallis tortor risus dapibus augue vel accumsan tellus nisi eu", "date": "19.05.2017", "caloriesLost": 2472, "caloriesGained": 6120 },
        { "id": 2, "happyMemory": "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue", "date": "25.07.2018", "caloriesLost": 3776, "caloriesGained": 3605 },
        { "id": 3, "happyMemory": "curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar", "date": "12.08.2018", "caloriesLost": 1557, "caloriesGained": 7373 },
        { "id": 4, "happyMemory": "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum", "date": "18.09.2016", "caloriesLost": 2769, "caloriesGained": 7625 },
            // { "id": 5, "happyMemory": "nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta", "date": "08.01.2018", "caloriesLost": 2823, "caloriesGained": 5538 },
            // { "id": 6, "happyMemory": "eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in", "date": "29.01.2018", "caloriesLost": 1636, "caloriesGained": 6924 },
            // { "id": 7, "happyMemory": "dapibus duis at velit eu est congue elementum in hac habitasse platea", "date": "01.09.2018", "caloriesLost": 6937, "caloriesGained": 5525 },
            // { "id": 8, "happyMemory": "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed", "date": "14.07.2017", "caloriesLost": 6022, "caloriesGained": 4562 },
            // { "id": 9, "happyMemory": "quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis", "date": "12.05.2017", "caloriesLost": 503, "caloriesGained": 678 },
            // { "id": 10, "happyMemory": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in", "date": "26.08.2016", "caloriesLost": 7758, "caloriesGained": 5000 },
            // { "id": 11, "happyMemory": "fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh", "date": "31.08.2017", "caloriesLost": 5613, "caloriesGained": 4715 },
            // { "id": 12, "happyMemory": "in hac habitasse platea dictumst etiam faucibus cursus urna ut", "date": "11.02.2019", "caloriesLost": 6361, "caloriesGained": 2326 },
            // { "id": 13, "happyMemory": "morbi non quam nec dui luctus rutrum nulla tellus in sagittis", "date": "26.01.2018", "caloriesLost": 4002, "caloriesGained": 4020 },
            // { "id": 14, "happyMemory": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut", "date": "11.10.2018", "caloriesLost": 5951, "caloriesGained": 4268 },
            // { "id": 15, "happyMemory": "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin", "date": "12.01.2017", "caloriesLost": 3005, "caloriesGained": 2410 },
            // { "id": 16, "happyMemory": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien", "date": "07.01.2017", "caloriesLost": 5189, "caloriesGained": 7701 },
            // { "id": 17, "happyMemory": "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar", "date": "20.12.2018", "caloriesLost": 6098, "caloriesGained": 6019 },
            // { "id": 18, "happyMemory": "nunc purus phasellus in felis donec semper sapien a libero", "date": "06.11.2016", "caloriesLost": 1153, "caloriesGained": 2520 },
            // { "id": 19, "happyMemory": "volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus", "date": "13.04.2017", "caloriesLost": 2685, "caloriesGained": 7189 },
            // { "id": 20, "happyMemory": "in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla", "date": "05.11.2017", "caloriesLost": 1752, "caloriesGained": 3679 },
            // { "id": 21, "happyMemory": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo", "date": "21.06.2019", "caloriesLost": 7562, "caloriesGained": 4446 },
            // { "id": 22, "happyMemory": "condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et", "date": "08.01.2017", "caloriesLost": 7895, "caloriesGained": 3428 },
            // { "id": 23, "happyMemory": "nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla", "date": "02.10.2016", "caloriesLost": 3626, "caloriesGained": 3712 },
            // { "id": 24, "happyMemory": "tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum", "date": "02.08.2018", "caloriesLost": 4408, "caloriesGained": 4152 },
            // { "id": 25, "happyMemory": "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales", "date": "18.12.2016", "caloriesLost": 6895, "caloriesGained": 43 },
            // { "id": 26, "happyMemory": "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis", "date": "27.04.2018", "caloriesLost": 5556, "caloriesGained": 4816 },
            // { "id": 27, "happyMemory": "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien", "date": "18.05.2019", "caloriesLost": 66, "caloriesGained": 7565 },
            // { "id": 28, "happyMemory": "in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices", "date": "23.06.2017", "caloriesLost": 7627, "caloriesGained": 3999 },
            // { "id": 29, "happyMemory": "curae nulla dapibus dolor vel est donec odio justo sollicitudin", "date": "03.04.2018", "caloriesLost": 4740, "caloriesGained": 1459 },
            // { "id": 30, "happyMemory": "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis", "date": "03.07.2018", "caloriesLost": 6841, "caloriesGained": 5166 },
            // { "id": 31, "happyMemory": "porttitor pede justo eu massa donec dapibus duis at velit eu est congue", "date": "27.05.2018", "caloriesLost": 4831, "caloriesGained": 3885 },
            // { "id": 32, "happyMemory": "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi", "date": "18.10.2017", "caloriesLost": 6982, "caloriesGained": 190 },
            // { "id": 33, "happyMemory": "ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in", "date": "10.05.2018", "caloriesLost": 5950, "caloriesGained": 1907 },
            // { "id": 34, "happyMemory": "ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse", "date": "14.11.2017", "caloriesLost": 5262, "caloriesGained": 7132 },
            // { "id": 35, "happyMemory": "vulputate elementum nullam varius nulla facilisi cras non velit nec", "date": "18.07.2018", "caloriesLost": 900, "caloriesGained": 1301 },
            // { "id": 36, "happyMemory": "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer", "date": "06.10.2017", "caloriesLost": 2662, "caloriesGained": 727 },
            // { "id": 37, "happyMemory": "dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper", "date": "13.10.2018", "caloriesLost": 5956, "caloriesGained": 6572 },
            // { "id": 38, "happyMemory": "at ipsum ac tellus semper interdum mauris ullamcorper purus sit", "date": "02.03.2017", "caloriesLost": 7988, "caloriesGained": 3430 },
            // { "id": 39, "happyMemory": "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a", "date": "07.09.2016", "caloriesLost": 7955, "caloriesGained": 5567 },
            // { "id": 40, "happyMemory": "cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi", "date": "02.01.2019", "caloriesLost": 3085, "caloriesGained": 2714 },
            // { "id": 41, "happyMemory": "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis", "date": "20.06.2018", "caloriesLost": 1131, "caloriesGained": 2300 },
            // { "id": 42, "happyMemory": "eget massa tempor convallis nulla neque libero convallis eget eleifend", "date": "28.05.2017", "caloriesLost": 1094, "caloriesGained": 3034 },
            // { "id": 43, "happyMemory": "erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer", "date": "03.05.2018", "caloriesLost": 214, "caloriesGained": 3469 },
            // { "id": 44, "happyMemory": "consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus", "date": "09.11.2016", "caloriesLost": 5410, "caloriesGained": 1708 },
            // { "id": 45, "happyMemory": "tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit", "date": "11.08.2018", "caloriesLost": 1429, "caloriesGained": 599 },
            // { "id": 46, "happyMemory": "nullam sit amet turpis elementum ligula vehicula consequat morbi a", "date": "14.10.2017", "caloriesLost": 2242, "caloriesGained": 761 },
            // { "id": 47, "happyMemory": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa", "date": "28.12.2016", "caloriesLost": 1538, "caloriesGained": 6613 },
            // { "id": 48, "happyMemory": "venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede", "date": "21.09.2017", "caloriesLost": 4861, "caloriesGained": 726 },
            // { "id": 49, "happyMemory": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante", "date": "06.11.2017", "caloriesLost": 2812, "caloriesGained": 7514 },
            // { "id": 50, "happyMemory": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed", "date": "04.09.2017", "caloriesLost": 5372, "caloriesGained": 991 }
        ]
}


const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LOG':
            console.log('button clicked');
            let logToAdd = action.log;
            const logs = [...state.logs, logToAdd]
            return{ ...state, logs } 
        default:
            console.log('that is not a valid type, check the code');
    }
    return state;
}

export default RootReducer;