import './TypeList.scss';
import '../MainTemplate/MainTemplate.scss';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

interface _List {
    imgUrl: string;
    title: string;
    data: string;
    redirectTo: string;
}

function TypeList() {
    const userLogin = useAppSelector(state => state.logged);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const [typeList, setTypeList] = useState([
        {
            imgUrl: "https://s3-alpha-sig.figma.com/img/b8ad/5cc8/ff415d03e31dd677c1a719427aebc57c?Expires=1649635200&Signature=SBhI2VDdmVEp4~MmJN7mrQeyvLI1Vqw31ModgakO-nS0D0Gr5xYj~iHhpNwMMCpf6Y-p4wLkr~NIh~rYiWKgI9v20XnxKS8eFuHtAAPqLt5qM2heVaBdxsXrTlWWZ4CPvtaBuI~fyPOdKZxEfwtQqfkZoOQt4U~tfFdnHck96~ksBmComYbwri1ieipbR~tAkz9fTka8BSqd8ob~GKGx3OGLtax0tkj0kJhHpchZmIMzptYG3ZkVpDuyVv1YfP0jZgO3QWsWkVhqUp94PJV4UnAEOXYjaJt5lDop1yWg7ZLjfbg-KYXqaW2~hLnI8Mq8cGmVrMYYf3w1uoDW7ChCfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Empty list",
            data: "Let friends write down what they bring",
            redirectTo: "/choosefriends"
        },
        {
            imgUrl: "https://s3-alpha-sig.figma.com/img/2cee/be77/1751c9e0130cbc24dd88af91cc510813?Expires=1649635200&Signature=hGKjodF8yL8PiFe7KVOFND1op89QopXA2qNytRashRVRu4VI3pBacBEV~DQ2eQzg7BZ48nlgrxNebxAPEQmzRqvl-h-pkgpRHa65Z7tTlz4pysStkDhy5r30Y5471dqC7FDvIKBat-pbhmwCACYSCjyMaCQFqcXzllAVMOX1aplXqfr0zASpw3mGeh7NlDAmzaTuPbH5gYOq-sFZYfWVpOOnsMB6kr0gPFeSM~KOQYpb5NGm91voJe71fTu~2fOw3hBJyWqSBPDMQSyowqyPuwanb6LSL~dJhDB9U4HHVFVe5LMIozl9LTvsS37r8nmg-zClUKCXFk2zKSK-cEOb-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Manual list",
            data: "Write your own list",
            redirectTo: "/choosefriends"
        },
        {
            imgUrl: "https://s3-alpha-sig.figma.com/img/697c/fdd9/43724849ea5ca7e754b304927de585fd?Expires=1649635200&Signature=VBE5sJA-xR4GLh0hoV-uI75bFE1X5GH3UxflY-kLLIqI4gCt7EbV6tjLHX0x~iGHiJ7VZXfU8hoZYEBX55dK~~hT4WvhwXbWvy~7PnVB8vw8nfYgM8EkJEJUsg6QWiryNfBnqizY~~sHSi6jYdONOetXjtWaSpAbu7OOMOuE5Hgy6VHJ7V1PR9t43L0yiOwb67bkJqAXUFO-ImOfB9eYIBPwB02LmxoPaUqxgn3LY1O~otlanuI9NUjN751VMBM5VlmF01zF74GLY0~sPvbb28nyqB5HoZ1wOD3Vq4-PFs2DPye7GiSiyS50NUazKbT-AefKigu9o13A-XbRhmXMKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            title: "Smart list",
            data: "Let IBring make a pefect list for you",
            redirectTo: "/choosefriends"
        },
    ]);

    function handleTypeList(ev: any, elem: any) {
        ev.preventDefault();
        nav(elem.redirectTo);
    }

    return (
        <div className="mainTemplate">
            <div className="mainHeader listForm">

            </div>
            <div className="mainContent">
                <label className='marginTitleNormal'>Please choose a list type</label>

                <div className="listContainer">
                    {typeList.map((elem, index) => {
                        return (
                            <form onClick={(ev: any) => { handleTypeList(ev, elem) }} key={index} className="typeList">
                                <div className="imgDiv">
                                    <img src={elem.imgUrl} alt="" />
                                </div>
                                <div className="dataContainer">
                                    <div className="Title">{elem.title}</div>
                                    <div className="data">{elem.data}</div>
                                    <div id={`redirect${index}`} className="redirect" style={{ display: "none" }}>{elem.redirectTo}</div>
                                </div>
                            </form>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default TypeList;