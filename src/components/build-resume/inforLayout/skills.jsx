




const Skills = ({ form, onFormChange}) => {
    return (
        <>
            <div className="firstInfor-container lan-row">
                <div className="firstInfor-main">
                    <div className="firstInfor-row wrap gap">
                        <div className="firstInfor-c">
                            <div className="input-title">نام مهارت</div>
                            <input name="skillName1" type="text" value={form.skillName1} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سطح</div>
                                <select value={form.sLevel1} onChange={onFormChange} name="sLevel1">
                                    <option value="" disabled>☆☆☆☆☆</option>
                                    <option value="1">★☆☆☆☆</option>
                                    <option value="2">★★☆☆☆</option>
                                    <option value="3">★★★☆☆</option>
                                    <option value="4">★★★★☆</option>
                                    <option value="5">★★★★★</option>
                                </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">نام مهارت</div>
                            <input name="skillName2" type="text" value={form.skillName2} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سطح</div>
                            <select value={form.sLevel2} onChange={onFormChange} name="sLevel2">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                    </div>
                    <div className="firstInfor-row wrap gap">
                        <div className="firstInfor-c">
                            <div className="input-title">نام مهارت</div>
                            <input name="skillName3" type="text" value={form.skillName3} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سطح</div>
                            <select value={form.sLevel3} onChange={onFormChange} name="sLevel3">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">نام مهارت</div>
                            <input name="skillName4" type="text" value={form.skillName4} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سطح</div>
                            <select value={form.sLevel4} onChange={onFormChange} name="sLevel4">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                    </div>
                    <div className="firstInfor-row wrap gap">
                        <div className="firstInfor-c">
                            <div className="input-title">نام مهارت</div>
                            <input name="skillName5" type="text" value={form.skillName5} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سطح</div>
                            <select value={form.sLevel5} onChange={onFormChange} name="sLevel5">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">نام مهارت</div>
                            <input name="skillName6" type="text" value={form.skillName6} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">سطح</div>
                            <select value={form.sLevel66} onChange={onFormChange} name="sLevel6">
                                <option value="" disabled>☆☆☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="4">★★★★☆</option>
                                <option value="5">★★★★★</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default Skills;