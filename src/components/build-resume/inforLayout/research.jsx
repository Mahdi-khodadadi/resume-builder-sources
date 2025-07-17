






const Research = ({ form, onFormChange}) => {
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
                        <div style={{width: "100%"}} className="firstInfor-c">
                            <div className="input-title">عنوان</div>
                            <input name="resTitle" type="text" value={form.resTitle} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div style={{width: "50%"}} className="firstInfor-c">
                            <div className="input-title">ناشر</div>
                            <input name="publisher" type="text" value={form.publisher} onChange={onFormChange}/>
                        </div>
                        <div style={{width: "30%"}} className="firstInfor-c">
                            <div className="input-title">لینک مرتبط</div>
                            <input name="resLink" type="text" value={form.resLink} onChange={onFormChange}/>
                        </div>
                        <div style={{width: "10%"}} className="firstInfor-c">
                            <div className="input-title">تاریخ</div>
                            <select value={form.resMonth} onChange={onFormChange} name="resMonth">
                                <option value="" disabled>ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div style={{width: "10%"}} className="firstInfor-c">
                            <div className="input-title">سال</div>
                            <select value={form.resYear} onChange={onFormChange} name="resYear">
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
                            <input name="resDesc" type="textarea" value={form.resDesc} onChange={onFormChange}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Research;