import mongoose from 'mongoose';

// 상품 schema 만들기
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    images: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// 스키마 설정(가상 포함, id 변환)
productSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret.id = ret._id; // _id => id로 복사
    delete ret._id;
    delete ret.__v;
  },
});

export default mongoose.model('Product', productSchema);
