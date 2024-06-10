from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

class PlayerBase(BaseModel):
    username: str
    title: Optional[str] = None
    rating: int

class PlayerCreate(PlayerBase):
    pass

class Player(PlayerBase):
    id: int

    class Config:
        orm_mode = True

class RatingHistoryBase(BaseModel):
    player_id: int
    date: datetime
    rating: float

class RatingHistoryCreate(RatingHistoryBase):
    pass

class RatingHistory(RatingHistoryBase):
    id: int

    class Config:
        orm_mode = True
