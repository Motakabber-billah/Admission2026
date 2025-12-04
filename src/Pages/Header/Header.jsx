import LOGO from '../../assets/images.jfif';

const Header = () => {
    return (
        <div className='bg-slate-100 py-5'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-5 '>
                <img className='w-16 h-16' src={LOGO} alt="" />
                <h2 className='text-2xl md:text-3xl text-center font-bold'>হাজী বয়েন উদ্দিন পাবলিক উচ্চ বিদ্যালয়</h2>
            </div>
            <div>
                <h2 className='text-2xl md:text-3xl text-green-600 text-center'>অনলাইন ভর্তির আবেদন ২০২৬</h2>
            </div>
        </div>
    );
};

export default Header;