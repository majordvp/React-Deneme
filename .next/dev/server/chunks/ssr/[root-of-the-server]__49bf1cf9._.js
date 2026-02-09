module.exports = [
"[project]/src/screens/DashboardScreen.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)"); // React ve Hook'lar
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-native/index.js [ssr] (ecmascript)"); // Mobil için gerekli bileşenler
;
;
;
// Şehir listesi
const CITIES = [
    {
        name: 'İstanbul',
        lat: 41.0082,
        lon: 28.9784
    },
    {
        name: 'Ankara',
        lat: 39.9334,
        lon: 32.8597
    },
    {
        name: 'İzmir',
        lat: 38.4237,
        lon: 27.1428
    },
    {
        name: 'Antalya',
        lat: 36.8841,
        lon: 30.7056
    },
    {
        name: 'Bursa',
        lat: 40.1824,
        lon: 29.0667
    },
    {
        name: 'Erzurum',
        lat: 39.9043,
        lon: 41.2679
    }
];
// BU DOSYA SADECE MOBİL CİHAZLAR TARAFINDAN OKUNUR (.js uzantısı)
const DashboardScreen = ()=>{
    const [selectedCity, setSelectedCity] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(CITIES[0]);
    const [weather, setWeather] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isModalVisible, setIsModalVisible] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        fetchWeather();
    }, [
        selectedCity
    ]);
    const fetchWeather = async ()=>{
        setLoading(true);
        try {
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.lat}&longitude=${selectedCity.lon}&current_weather=true`);
            const data = await response.json();
            setWeather(data.current_weather);
            setLoading(false);
        } catch (e) {
            setError('Veri çekilemedi.');
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["View"], {
        style: styles.container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ScrollView"], {
                contentContainerStyle: styles.scrollContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        style: styles.title,
                        children: "Mobil Panom 📱"
                    }, void 0, false, {
                        fileName: "[project]/src/screens/DashboardScreen.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TouchableOpacity"], {
                        style: styles.citySelector,
                        onPress: ()=>setIsModalVisible(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            style: styles.citySelectorText,
                            children: [
                                "📍 ",
                                selectedCity.name,
                                " (Dokun)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/screens/DashboardScreen.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/DashboardScreen.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["View"], {
                        style: styles.center,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ActivityIndicator"], {
                            size: "large",
                            color: "#3498db"
                        }, void 0, false, {
                            fileName: "[project]/src/screens/DashboardScreen.js",
                            lineNumber: 55,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/DashboardScreen.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["View"], {
                        style: styles.center,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            style: {
                                color: 'red'
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/screens/DashboardScreen.js",
                            lineNumber: 59,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/screens/DashboardScreen.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["View"], {
                        style: styles.weatherCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                style: styles.weatherCity,
                                children: selectedCity.name
                            }, void 0, false, {
                                fileName: "[project]/src/screens/DashboardScreen.js",
                                lineNumber: 63,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                style: styles.weatherTemp,
                                children: [
                                    weather?.temperature,
                                    "°C"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/DashboardScreen.js",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                style: styles.weatherStatus,
                                children: [
                                    "Hava Durumu: ",
                                    weather?.windspeed > 15 ? 'Rüzgarlı' : 'Sakin'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/screens/DashboardScreen.js",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/DashboardScreen.js",
                        lineNumber: 62,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/screens/DashboardScreen.js",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Modal"], {
                visible: isModalVisible,
                animationType: "slide",
                transparent: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["View"], {
                    style: styles.modalOverlay,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["View"], {
                        style: styles.modalContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                style: styles.modalTitle,
                                children: "Şehir Seçin"
                            }, void 0, false, {
                                fileName: "[project]/src/screens/DashboardScreen.js",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["FlatList"], {
                                data: CITIES,
                                keyExtractor: (item)=>item.name,
                                renderItem: ({ item })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TouchableOpacity"], {
                                        style: styles.cityItem,
                                        onPress: ()=>{
                                            setSelectedCity(item);
                                            setIsModalVisible(false);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                            style: styles.cityItemText,
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/screens/DashboardScreen.js",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/screens/DashboardScreen.js",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/src/screens/DashboardScreen.js",
                                lineNumber: 75,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["TouchableOpacity"], {
                                style: styles.closeButton,
                                onPress: ()=>setIsModalVisible(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                    style: styles.closeButtonText,
                                    children: "Kapat"
                                }, void 0, false, {
                                    fileName: "[project]/src/screens/DashboardScreen.js",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/screens/DashboardScreen.js",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/screens/DashboardScreen.js",
                        lineNumber: 73,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/screens/DashboardScreen.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/screens/DashboardScreen.js",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/screens/DashboardScreen.js",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// MOBİL ODAKLI STİLLER
const styles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$native$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["StyleSheet"].create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA'
    },
    scrollContent: {
        padding: 20,
        paddingTop: 40
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20
    },
    citySelector: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        marginBottom: 20,
        elevation: 2
    },
    citySelectorText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '600'
    },
    weatherCard: {
        backgroundColor: '#3498db',
        padding: 40,
        borderRadius: 25,
        alignItems: 'center'
    },
    weatherCity: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    weatherTemp: {
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold'
    },
    weatherStatus: {
        color: 'white',
        fontSize: 16
    },
    center: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '50%'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    cityItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    cityItemText: {
        fontSize: 18
    },
    closeButton: {
        marginTop: 10,
        padding: 15,
        alignItems: 'center'
    },
    closeButtonText: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
const __TURBOPACK__default__export__ = DashboardScreen;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$screens$2f$DashboardScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/screens/DashboardScreen.js [ssr] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$screens$2f$DashboardScreen$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/index.js",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__49bf1cf9._.js.map