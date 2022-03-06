"use strict";
exports.__esModule = true;
require("./RecipeInfo.scss");
var AutoAwesome_1 = require("@mui/icons-material/AutoAwesome");
var menu_1 = require("../../components/menuBar/menu");
var background_jpg_1 = require("../../images/background.jpg");
var FavoriteBorder_1 = require("@mui/icons-material/FavoriteBorder");
var ArrowBackSharp_1 = require("@mui/icons-material/ArrowBackSharp");
var AccessTime_1 = require("@mui/icons-material/AccessTime");
var People_1 = require("@mui/icons-material/People");
var LocalFireDepartment_1 = require("@mui/icons-material/LocalFireDepartment");
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Tooltip_1 = require("@mui/material/Tooltip");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../../../app/hooks");
var itemSlice_1 = require("../../features/item/itemSlice");
var NamePage_1 = require("../../features/pgaeName/NamePage");
var react_native_1 = require("react-native");
var CssTextField = styles_1.styled(material_1.TextField)({
    '& label.Mui-focused': {
        color: '#b5739d'
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: '#b5739d'
        }
    },
    input: {
        color: "gray",
        fontSize: 15,
        readOnly: true
    }
});
var styles = react_native_1.StyleSheet.create({
    //bold: {fontWeight: 'bold'},
    italic: { fontStyle: 'italic' },
    underline: { textDecorationLine: 'underline' },
    color: { color: 'grey' }
});
function RecipeInfo() {
    var _a = react_1.useState(0), like = _a[0], setLike = _a[1];
    //Redux toolkit
    var dispatch = hooks_1.useAppDispatch();
    var recipe_ = hooks_1.useAppSelector(itemSlice_1.selectedRecipe);
    var from_ = hooks_1.useAppSelector(itemSlice_1.selectedFrom);
    console.log(from_);
    var isNew = hooks_1.useAppSelector(itemSlice_1.selectedIsNew);
    var pageName = hooks_1.useAppSelector(NamePage_1.selectPage);
    react_1.useEffect(function () {
        // axios.get('http://localhost:3004/select/1').then(data => {
        //     const recipe = data.data.recipe;
        //     const from = data.data.from;
        //     const isNew_ = data.data.isNew;
        //     dispatch(getSelectAsync([recipe, from, isNew_]));
        // })
        dispatch(itemSlice_1.getSelectAsync());
    }, []);
    function handleLike() {
        setLike(like + 1);
    }
    function handleTo() {
        dispatch(NamePage_1.updateName('/RecipeInfo'));
    }
    //json db
    // useEffect(() => {
    //     axios.get('http://localhost:3004/selected/1').then(res => {
    //         //console.log(res.data);
    //         const data = res.data.recipe;
    //         const f = res.data.from;
    //         setRecipe(data);
    //         setFrom(f);
    //     });
    //     axios.delete('http://localhost:3004/selected/1');
    // }, []);
    // const editClick = (recipe:any) => {
    //     console.log(isNew);
    //     axios.post('http://localhost:3004/edit', {recipe: recipe, new: false, from: from_});
    // } 
    return (React.createElement("div", { className: 'info' },
        React.createElement("div", { className: 'menu' },
            React.createElement(menu_1["default"], null)),
        React.createElement("div", { className: "content" },
            React.createElement("img", { className: 'image', src: background_jpg_1["default"] }),
            React.createElement("div", { className: 'boxInfo' },
                React.createElement(react_router_dom_1.Link, { className: 'backTo', to: pageName },
                    React.createElement(ArrowBackSharp_1["default"], { sx: { color: '#b5739d', fontSize: 30 }, onClick: handleTo })),
                React.createElement("div", { className: 'box' },
                    React.createElement("div", { className: "edit" },
                        React.createElement(Tooltip_1["default"], { title: 'edit recipe' },
                            React.createElement(react_router_dom_1.Link, { to: '/NewRecipe' },
                                React.createElement(AutoAwesome_1["default"], { sx: {
                                        color: '#b5739d', fontSize: 35
                                    } })))),
                    React.createElement("h1", null, recipe_.name),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info1' },
                        React.createElement("div", { className: 'insertPhotos' },
                            React.createElement("img", { src: recipe_.image, alt: "" })),
                        React.createElement("h2", { className: 'by' }, "By : Dima Abbas"),
                        React.createElement("div", { className: 'item' },
                            React.createElement(FavoriteBorder_1["default"], { onClick: handleLike, sx: { fontSize: 40, color: '#b5739d', paddingTop: '15px' } }),
                            React.createElement("p", null, like)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(AccessTime_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '15px' } }),
                            React.createElement("p", null, recipe_.time)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(People_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '15px' } }),
                            React.createElement("p", null, recipe_.people)),
                        React.createElement("div", { className: 'item' },
                            React.createElement(LocalFireDepartment_1["default"], { sx: { fontSize: 40, color: '#b5739d', paddingTop: '15px' } }),
                            React.createElement("p", null, recipe_.calories))),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("div", { className: 'info3' },
                        React.createElement("h1", null, "Ingredients"),
                        React.createElement(react_native_1.Text, { style: { fontStyle: 'italic', color: 'gray',
                                paddingLeft: '20px', fontSize: 20, lineHeight: 40 } }, recipe_.ingredients),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("h1", null, "The Method"),
                        React.createElement(react_native_1.Text, { style: { fontStyle: 'italic', color: 'gray',
                                paddingLeft: '20px', fontSize: 20, lineHeight: 40 } }, recipe_.method)))))));
}
exports["default"] = RecipeInfo;
