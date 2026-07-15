import { Flower2, Heart, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EducationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="game-container p-4 pb-20">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={handleBack}
          className="p-2 rounded-full bg-white shadow-soft hover:bg-cream-50 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="text-lg font-bold text-gray-800">公益科普</h1>
        <button
          className="p-2 rounded-full bg-white shadow-soft hover:bg-cream-50 transition-colors"
        >
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="absolute top-20 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 animate-float">
          <Flower2 className="w-12 h-12 text-rose-200 opacity-30" />
        </div>
        <div className="absolute bottom-40 left-8 animate-float" style={{ animationDelay: '1.5s' }}>
          <Flower2 className="w-8 h-8 text-rose-300 opacity-40" />
        </div>
        <div className="absolute top-60 left-20 animate-float" style={{ animationDelay: '0.8s' }}>
          <Flower2 className="w-6 h-6 text-rose-200 opacity-30" />
        </div>
      </div>

      <div className="card-soft p-6 mb-6 animate-fade-in">
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-rose-100 to-cream-200 rounded-full flex items-center justify-center shadow-warm mb-4">
            <Flower2 className="w-10 h-10 text-rose-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            把一朵小红花送给真实生活中的他们
          </h2>
        </div>

        <div className="bg-cream-50 rounded-xl p-6 mb-6">
          <p className="text-gray-700 leading-loose text-center">
            透析不是一次治疗，<br />
            而是一种长期生活方式。
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50">
              <BookOpen className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">规律的治疗</h3>
              <p className="text-sm text-gray-600">
                血液透析患者通常需要每周进行3次治疗，每次4-5小时。规律治疗是维持生命的基础。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-orange-50">
              <Heart className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">饮食管理</h3>
              <p className="text-sm text-gray-600">
                控制水分摄入、限制钠钾磷的摄入，是透析患者每天都需要面对的挑战。
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-green-50">
              <Flower2 className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">工作与家庭平衡</h3>
              <p className="text-sm text-gray-600">
                在治疗、工作和家庭之间找到平衡，需要患者、家人和社会的共同支持。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-soft p-6 mb-6 bg-gradient-to-br from-rose-50 to-cream-100">
        <h3 className="font-semibold text-gray-800 mb-3">了解更多</h3>
        <div className="space-y-3">
          <a href="#" className="block p-3 bg-white rounded-xl text-sm text-gray-600 hover:bg-cream-50 transition-colors">
            透析患者的饮食指南
          </a>
          <a href="#" className="block p-3 bg-white rounded-xl text-sm text-gray-600 hover:bg-cream-50 transition-colors">
            如何支持身边的透析患者
          </a>
          <a href="#" className="block p-3 bg-white rounded-xl text-sm text-gray-600 hover:bg-cream-50 transition-colors">
            慢病患者的心理支持
          </a>
        </div>
      </div>

      <button
        onClick={handleHome}
        className="btn-primary w-full"
      >
        返回首页
      </button>

      <p className="text-center text-xs text-gray-400 mt-6">
        本游戏旨在增进公众对慢病患者生活的理解和关注
      </p>
    </div>
  );
};
