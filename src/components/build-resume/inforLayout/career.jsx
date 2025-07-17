




const Career = ({ form, onFormChange}) => {
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
                            <div className="input-title">سمت شغلی مربوطه</div>
                            <input name="jobPosition" type="text" value={form.jobPosition} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">عنوان محل کار</div>
                            <input name="titleWorkplace" type="text" value={form.titleWorkplace} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">کشور</div>
                            <input name="countryWorkplace" type="text" value={form.countryWorkplace} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">استان</div>
                            <input name="provinceWorkplace" type="text" value={form.provinceWorkplace} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">شهر</div>
                            <input name="cityWorkplace" type="text" value={form.cityWorkplace} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">شروع</div>
                            <select value={form.startWork} onChange={onFormChange} name="startWork">
                                <option value="" disabled>ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سال</div>
                            <select value={form.startWorkYear} onChange={onFormChange} name="startWorkYear">
                                <option value="" disabled>سال</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">اتمام</div>
                            <select value={form.endWork} onChange={onFormChange} name="endWork">
                                <option value="" disabled>ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title" disabled>سال</div>
                            <select value={form.endWorkYear} onChange={onFormChange} name="endWorkYear">
                                <option value="">سال</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c studying" style={{width: "100%"}}>
                        <div className="input-title">مشغول کار در این مجموعه هستم</div>
                            <input name="busy" type="checkbox" value={form.busy} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div className="firstInfor-c" style={{width: "100%"}}>
                            <div className="input-title">وظایف/دستاوردها</div>
                            <textarea name="dutiesDesc" rows="5" cols="40" placeholder="وظایف و دستاورد های خود را وارد کنید..." value={form.dutiesDesc} onChange={onFormChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;