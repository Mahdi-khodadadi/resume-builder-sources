




const Education = ({ form, onFormChange}) => {
    const months = [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر',
        'مرداد', 'شهریور', 'مهر', 'آبان',
        'آذر', 'دی', 'بهمن', 'اسفند'
      ];
    const years = Array.from({ length: 86 }, (_, i) => 1405 - i);

    return (
        <>
            <div className="firstInfor-container">
                <div className="firstInfor-main">
                    <div className="firstInfor-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">مقطع</div>
                            <input name="section" type="text" value={form.section} onChange={onFormChange}/>
                        </div>
                        <div  className="firstInfor-c">
                            <div className="input-title">رشته تحصیلی</div>
                            <input name="string" type="text" value={form.string} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">گرایش/تخصص</div>
                            <input name="expertise" type="text" value={form.expertise} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">عنوان موسسه آموزشی</div>
                            <input name="insTitle" type="text" value={form.insTitle} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">معدل</div>
                            <input name="GPA" type="text" value={form.GPA} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">کشور</div>
                            <input name="insCountry" type="text" value={form.insCountry} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">استان</div>
                            <input name="insProvince" type="text" value={form.insProvince} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">شهر</div>
                            <input name="insCity" type="text" value={form.insCity} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">ورود</div>
                            <select value={form.login} onChange={onFormChange} name="login">
                                <option value="" disabled>ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سال</div>
                            <select value={form.loginYear} onChange={onFormChange} name="loginYear">
                                <option value="" disabled>سال</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                        <div className="input-title">فراغت از تحصیل</div>
                            <select value={form.free} onChange={onFormChange} name="free">
                                <option value="" disabled>ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                        <div className="input-title">سال</div>
                            <select value={form.freeYear} onChange={onFormChange} name="freeYear">
                                <option value="" disabled>سال</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c studying">
                        <div className="input-title">در حال تحصیل</div>
                            <input name="studying" type="checkbox" value={form.studying} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div className="firstInfor-c" style={{width: "100%"}}>
                            <div className="input-title">توضیحات</div>
                            <textarea name="educationDesc" rows="5" cols="40" placeholder="توضیحات خود را وارد کنید..." value={form.educationDesc} onChange={onFormChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;