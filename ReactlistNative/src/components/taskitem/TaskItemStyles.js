import { StyleSheet } from "react-native";

export const TaskItemStyles = StyleSheet.create({
    cardBox:{
        // width: "100%",
        height: 70,
        marginBottom: 15,
        backgroundColor: "#31364d",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 30,
        borderRadius: 5,
        paddingRight: 30,
    },
    cardText: {
        color: "#fff",
        fontSize: 16,
    },
    cardImage: {
        width: 110,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    imagePen: {
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#9BB8ED",
        borderWidth: 2,
        borderRadius: 10,
    },
    imageTrash : {
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#E96B6B",
        borderWidth: 2,
        borderRadius: 10,
    },
})