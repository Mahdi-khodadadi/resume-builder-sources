




const Languages = ({ form, onFormChange}) => {


    return (
        <>
            <div className="firstInfor-container">
                <div className="firstInfor-main">
                    <div className="firstInfor-row">
                        <div className="firstInfor-c lw">
                            <div className="input-title">نام زبان</div>
                            <input name="lanName1" type="text" value={form.lanName1} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row lan-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت خواندن</div>
                            <select value={form.read1} onChange={onFormChange} name="read1">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت نوشتن</div>
                            <select value={form.write1} onChange={onFormChange} name="write1">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت شنیداری</div>
                            <select value={form.listen1} onChange={onFormChange} name="listen1">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت گفتاری</div>
                            <select value={form.speech1} onChange={onFormChange} name="speech1">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div style={{width: "100%"}} className="firstInfor-c">
                        <div className="input-title">توضیحات</div>
                            <input name="lanDesc1" type="text" value={form.lanDesc1} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row ">
                        <div className="firstInfor-c lw">
                            <div className="input-title">نام زبان</div>
                            <input name="lanName2" type="text" value={form.lanName2} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row lan-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت خواندن</div>
                            <select value={form.read2} onChange={onFormChange} name="read2">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت نوشتن</div>
                            <select value={form.write2} onChange={onFormChange} name="write2">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت شنیداری</div>
                            <select value={form.listen2} onChange={onFormChange} name="listen2">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت گفتاری</div>
                            <select value={form.speech2} onChange={onFormChange} name="speech2">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div style={{width: "100%"}} className="firstInfor-c">
                        <div className="input-title">توضیحات</div>
                            <input name="lanDesc2" type="text" value={form.lanDesc2} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div className="firstInfor-c lw">
                            <div className="input-title">نام زبان</div>
                            <input name="lanName3" type="text" value={form.lanName3} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row lan-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت خواندن</div>
                            <select value={form.read3} onChange={onFormChange} name="read3">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت نوشتن</div>
                            <select value={form.write3} onChange={onFormChange} name="write3">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت شنیداری</div>
                            <select value={form.listen3} onChange={onFormChange} name="listen3">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">مهارت گفتاری</div>
                            <select value={form.speech3} onChange={onFormChange} name="speech3">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div style={{width: "100%"}} className="firstInfor-c">
                        <div className="input-title">توضیحات</div>
                            <input name="lanDesc3" type="text" value={form.lanDesc3} onChange={onFormChange}/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Languages;