from sqlalchemy import Column, Integer, String, DateTime, Float
from .database import Base

class Player(Base):
    __tablename__ = "players"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    title = Column(String)
    rating = Column(Integer)
    rating_history = Column(String)  # JSON encoded string of ratings over time

class RatingHistory(Base):
    __tablename__ = "rating_history"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, index=True)
    date = Column(DateTime)
    rating = Column(Float)
