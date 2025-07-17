import avatar from "../../../assets/Image-Prof.jpg"
import React, { useContext } from "react";
import { BiContext } from "../../context/biContext";



const FirstInfor = ({ form, onFormChange}) => {
    const { handleImageChange, image } = useContext(BiContext);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'فروردین', 'اردیبهشت', 'خرداد', 'تیر',
        'مرداد', 'شهریور', 'مهر', 'آبان',
        'آذر', 'دی', 'بهمن', 'اسفند'
      ];
    const years = Array.from({ length: 86 }, (_, i) => 1405 - i);
    return (
        <>
            <div className="firstInfor-container">
                <div className="firstInfor-Avatar">
                    <img src={image ? image : avatar} alt="avatar" />
                    <input type="file" onChange={handleImageChange} name="image"/>
                </div>
                <div className="firstInfor-main" style={{width: "80%"}}>
                    <div className="firstInfor-row wrap">
                        <div className="firstInfor-c">
                            <div className="input-title">نام</div>
                            <input name="firstName" type="text" value={form.firstName} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">نام خانوادگی</div>
                            <input name="lastName" type="text" value={form.lastName} onChange={onFormChange}/>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">عنوان شغلی رزومه</div>
                            <input name="jobTitle" type="text" value={form.jobTitle} onChange={onFormChange}/>
                        </div>
                    </div>
                    <div className="firstInfor-row wrap" >
                        <div className="firstInfor-c">
                            <div className="input-title">جنسیت</div>
                            <select value={form.gender} onChange={onFormChange} name="gender">
                                <option value="" disabled></option>
                                <option value="مرد">مرد</option>
                                <option value="زن">زن</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">وضعیت تاهل</div>
                            <select value={form.marital} onChange={onFormChange} name="marital">
                                <option value="" disabled></option>
                                <option value="مجرد">مجرد</option>
                                <option value="متاهل">متاهل</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">وضعیت سربازی</div>
                            <select value={form.soldier} onChange={onFormChange} name="soldier">
                                <option value="" disabled></option>
                                <option value="مشمول">مشمول</option>
                                <option value="در حال خدمت">در حال خدمت</option>
                                <option value="پایان خدمت">پایان خدمت</option>
                                <option value="معاف">معاف</option>
                                <option value="معافیت تحصیلی">معافیت تحصیلی</option>
                                <option value="معافیت غیرپزشکی">معافیت غیرپزشکی</option>
                                <option value="معافیت پزشکی">معافیت پزشکی</option>
                            </select>
                        </div>
                        <div className="firstInfor-c">
                            <div className="input-title">تاریخ تولد</div>
                            <select value={form.day} onChange={onFormChange} name="day">
                                <option value="">روز</option>
                                    {days.map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                        <div className="input-title">ماه</div>
                            <select value={form.month} onChange={onFormChange} name="month">
                                <option value="">ماه</option>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="firstInfor-c">
                        <div className="input-title">سال</div>
                            <select value={form.year} onChange={onFormChange} name="year">
                                <option value="">سال</option>
                                {years.map(y => (
                                    <option key={y} value={y}>{y}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="firstInfor-row">
                        <div className="firstInfor-c" style={{width: "100%"}}>
                            <div className="input-title">درباره شما</div>
                            <textarea name="DescMe" rows="5" cols="40" placeholder="درباره خود توضیح دهید..." value={form.DescMe} onChange={onFormChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FirstInfor;