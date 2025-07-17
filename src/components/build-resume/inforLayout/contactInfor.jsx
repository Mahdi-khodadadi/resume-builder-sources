

const ContactInfor = ({ form, onFormChange}) => {
    return (
        <>
            <div className="firstInfor-container">
                <div className="firstInfor-main">
                    <div className="firstInfor-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">ایمیل</div>
                            <input name="email" type="text" value={form.email} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">موبایل</div>
                            <input name="mobile" type="text" value={form.mobile} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">تلفن ثابت</div>
                            <input name="telephon" type="text" value={form.telephon} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">وب سایت</div>
                            <input name="web" type="text" value={form.web} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">کشور</div>
                            <input name="addCounty" type="text" value={form.addCounty} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">استان</div>
                            <input name="addProvince" type="text" value={form.addProvince} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">شهر</div>
                            <input name="addCity" type="text" value={form.addCity} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">آدرس</div>
                            <input name="addres" type="text" value={form.addres} onChange={onFormChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactInfor;