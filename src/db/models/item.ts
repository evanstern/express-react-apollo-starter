import { Schema, model, Model } from 'mongoose';

import { IItemModel } from '../interfaces/item';

export const ItemSchema: Schema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Item: Model<IItemModel> = model<IItemModel>('Item', ItemSchema);
