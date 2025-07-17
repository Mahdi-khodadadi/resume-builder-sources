






const Projects = ({ form, onFormChange}) => {
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
                    <div className="firstInfor-row">
                        <div style={{width: "60%"}} className="firstInfor-c">
                            <div className="input-title">عنوان</div>
                            <input name="proTitle" type="text" value={form.proTitle} onChange={onFormChange}/>
                        </div>
                        <div style={{width: "40%"}} className="firstInfor-c">
                            <div className="input-title">کارفرما/درخواست کننده</div>
                            <input name="employer" type="text" value={form.employer} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div style={{width: "80%"}} className="firstInfor-c">
                            <div className="input-title">لینک مرتبط</div>
                            <input name="relLink" type="text" value={form.relLink} onChange={onFormChange}/>
                        </div>
                        <div style={{width: "10%"}} className="firstInfor-c">
                            <div className="input-title">تاریخ</div>
                            <select value={form.proMonth} onChange={onFormChange} name="proMonth">
                                <option value="" disabled>ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{width: "10%"}} className="firstInfor-c">
                            <div className="input-title">سال</div>
                            <select value={form.proYear} onChange={onFormChange} name="proYear">
                                <option value="" disabled>سال</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div style={{width: "100%"}} className="firstInfor-c">
                            <div className="input-title">توضیحات</div>
                            <input name="proDesc" type="textarea" value={form.proDesc} onChange={onFormChange}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Projects;